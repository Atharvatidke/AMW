import { useState, useEffect, useRef, useCallback } from "react";
import { MapPin, Mail, Phone, X } from "lucide-react";

interface CountryLocation {
  country: string;
  svgId: string;
  city: string;
  address: string;
  email: string;
  phone: string;
}

const countryLocations: CountryLocation[] = [
  {
    country: "India",
    svgId: "IN",
    city: "Mumbai",
    address: "1204, Solitaire Corporate Park, Andheri East, Mumbai, India",
    email: "india@tradelink.com",
    phone: "+91 22 6789 1234",
  },
  {
    country: "United Arab Emirates",
    svgId: "AE",
    city: "Dubai",
    address: "Office 2401, Jumeirah Business Centre, Dubai, UAE",
    email: "uae@tradelink.com",
    phone: "+971 4 567 8901",
  },
  {
    country: "Egypt",
    svgId: "EG",
    city: "Cairo",
    address: "45 El Tahrir Street, Garden City, Cairo, Egypt",
    email: "egypt@tradelink.com",
    phone: "+20 2 2794 5678",
  },
  {
    country: "Saudi Arabia",
    svgId: "SA",
    city: "Riyadh",
    address: "King Fahd Road, Al Olaya District, Riyadh, Saudi Arabia",
    email: "saudi@tradelink.com",
    phone: "+966 11 234 5678",
  },
];

const highlightedIds = countryLocations.map((l) => l.svgId);

const ZOOM_PADDING = 60;

export default function GlobalOperationsMap() {
  const [selectedCountry, setSelectedCountry] = useState<CountryLocation | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [cardAnchor, setCardAnchor] = useState<{ x: number; y: number } | null>(null);
  const [cardPosition, setCardPosition] = useState<{ left: number; top: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLObjectElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const defaultViewBoxRef = useRef<string>("");

  /** Smoothly animate the SVG viewBox */
  const animateViewBox = useCallback((targetVB: string, duration = 600) => {
    const obj = objectRef.current;
    if (!obj) return;
    try {
      const svgDoc = obj.contentDocument;
      if (!svgDoc) return;
      const svgEl = svgDoc.querySelector("svg");
      if (!svgEl) return;

      const current = svgEl.getAttribute("viewBox")!.split(" ").map(Number);
      const target = targetVB.split(" ").map(Number);
      const start = performance.now();

      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
        const vb = current.map((c, i) => c + (target[i] - c) * ease);
        svgEl.setAttribute("viewBox", vb.join(" "));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    } catch {
      /* ignore */
    }
  }, []);

  /** Collect all SVG path elements for a given country id */
  const getCountryPaths = useCallback((svgDoc: Document, id: string): SVGGraphicsElement[] => {
    const targets: SVGGraphicsElement[] = [];
    const byId = svgDoc.getElementById(id) as unknown as SVGGraphicsElement | null;
    if (byId) targets.push(byId);

    const nameEl = byId?.getAttribute("name");
    if (nameEl) {
      svgDoc.querySelectorAll(`path[class="${nameEl}"]`).forEach((p) => {
        if (!targets.includes(p as SVGGraphicsElement))
          targets.push(p as SVGGraphicsElement);
      });
    }
    return targets;
  }, []);

  /** Zoom into a specific country */
  const zoomToCountry = useCallback(
    (id: string) => {
      const obj = objectRef.current;
      if (!obj) return;
      try {
        const svgDoc = obj.contentDocument;
        if (!svgDoc) return;

        const targets = getCountryPaths(svgDoc, id);
        if (targets.length === 0) return;

        // Compute combined bounding box
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        targets.forEach((el) => {
          const bb = el.getBBox();
          minX = Math.min(minX, bb.x);
          minY = Math.min(minY, bb.y);
          maxX = Math.max(maxX, bb.x + bb.width);
          maxY = Math.max(maxY, bb.y + bb.height);
        });

        const w = maxX - minX + ZOOM_PADDING * 2;
        const h = maxY - minY + ZOOM_PADDING * 2;
        const x = minX - ZOOM_PADDING;
        const y = minY - ZOOM_PADDING;

        // Maintain container aspect ratio
        const container = containerRef.current;
        if (container) {
          const cRect = container.getBoundingClientRect();
          const aspect = cRect.width / cRect.height;
          const vbAspect = w / h;
          let fW = w, fH = h, fX = x, fY = y;

          if (vbAspect > aspect) {
            fH = w / aspect;
            fY = y - (fH - h) / 2;
          } else {
            fW = h * aspect;
            fX = x - (fW - w) / 2;
          }
          animateViewBox(`${fX} ${fY} ${fW} ${fH}`);
        } else {
          animateViewBox(`${x} ${y} ${w} ${h}`);
        }

        setIsZoomed(true);
      } catch {
        /* ignore */
      }
    },
    [animateViewBox, getCountryPaths]
  );

  /** Reset to default full-world view */
  const resetView = useCallback(() => {
    if (defaultViewBoxRef.current) {
      animateViewBox(defaultViewBoxRef.current);
      setIsZoomed(false);
      setSelectedCountry(null);
      setCardAnchor(null);
      setCardPosition(null);
    }
  }, [animateViewBox]);

  const updateCardPosition = useCallback(() => {
    if (!cardAnchor || !containerRef.current || !cardRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();

    const baseLeft = cardAnchor.x - containerRect.left + 12;
    const baseTop = cardAnchor.y - containerRect.top - cardRect.height / 2;

    const maxLeft = containerRect.width - cardRect.width - 12;
    const maxTop = containerRect.height - cardRect.height - 12;

    const clampedLeft = Math.min(Math.max(12, baseLeft), Math.max(12, maxLeft));
    const clampedTop = Math.min(Math.max(12, baseTop), Math.max(12, maxTop));

    setCardPosition({ left: clampedLeft, top: clampedTop });
  }, [cardAnchor]);

  useEffect(() => {
    const obj = objectRef.current;
    if (!obj) return;

    const applyStyles = () => {
      try {
        const svgDoc = obj.contentDocument;
        if (!svgDoc) return;

        const svgEl = svgDoc.querySelector("svg");
        if (!svgEl) return;

        // Set viewBox for proper sizing
        if (!svgEl.getAttribute("viewBox")) {
          const w = svgEl.getAttribute("width") || "2000";
          const h = svgEl.getAttribute("height") || "857";
          svgEl.setAttribute("viewBox", `0 0 ${w} ${h}`);
        }
        defaultViewBoxRef.current = svgEl.getAttribute("viewBox")!;

        svgEl.removeAttribute("width");
        svgEl.removeAttribute("height");
        svgEl.style.width = "100%";
        svgEl.style.height = "100%";
        svgEl.style.background = "transparent";

        // Default: light gray for all country paths
        const allPaths = svgDoc.querySelectorAll("path");
        allPaths.forEach((path: SVGPathElement) => {
          path.style.fill = "#E5E7EB";
          path.style.stroke = "#D1D5DB";
          path.style.strokeWidth = "0.5";
          path.style.transition = "fill 0.2s ease, stroke 0.2s ease";
        });

        // Highlight operational countries in green
        highlightedIds.forEach((id) => {
          const targets = getCountryPaths(svgDoc, id);

          targets.forEach((path) => {
            path.style.fill = "#4ADE80";
            path.style.fillOpacity = "0.8";
            path.style.cursor = "pointer";
            path.style.stroke = "#16A34A";
            path.style.strokeWidth = "0.8";

            path.addEventListener("mouseenter", () => {
              path.style.fill = "#22C55E";
              path.style.fillOpacity = "1";
              path.style.strokeWidth = "1.5";
            });
            path.addEventListener("mouseleave", () => {
              path.style.fill = "#4ADE80";
              path.style.fillOpacity = "0.8";
              path.style.strokeWidth = "0.8";
            });
            path.addEventListener("click", () => {
              const loc = countryLocations.find((l) => l.svgId === id);
              if (loc) {
                setSelectedCountry(loc);
                zoomToCountry(id);
                const rect = path.getBoundingClientRect();
                setCardAnchor({
                  x: rect.left + rect.width,
                  y: rect.top + rect.height / 2,
                });
              }
            });
          });
        });

        // Hide decorative circles
        svgDoc.querySelectorAll("circle").forEach((c: SVGCircleElement) => {
          c.style.display = "none";
        });
      } catch {
        setTimeout(applyStyles, 200);
      }
    };

    obj.addEventListener("load", applyStyles);
    applyStyles();

    return () => {
      obj.removeEventListener("load", applyStyles);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoomToCountry, getCountryPaths]);

  useEffect(() => {
    updateCardPosition();
  }, [updateCardPosition, selectedCountry]);

  useEffect(() => {
    const handleResize = () => updateCardPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateCardPosition]);

  return (
    <div ref={containerRef} className="w-full relative">
      {/* Legend */}
      <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#4ADE80]"></div>
        <span className="text-sm font-medium text-gray-700">
          Operational hubs across our global network
        </span>
      </div>

      {/* Reset View Button */}
      {isZoomed && (
        <button
          onClick={resetView}
          className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Reset view
        </button>
      )}

      {/* SVG Map — white background, no blue ocean */}
      <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-2xl md:rounded-[20px] border border-gray-200 overflow-hidden bg-white">
        <object
          ref={objectRef}
          data="/map.svg"
          type="image/svg+xml"
          className="w-full h-full"
          aria-label="World map showing AMW global operations"
        >
          <img
            src="/map.svg"
            alt="World map showing AMW operations"
            className="w-full h-full object-contain"
          />
        </object>
      </div>

      {/* Country Info Card */}
      {selectedCountry && (
        <div
          ref={cardRef}
          className="absolute z-20 bg-white rounded-xl shadow-xl p-5 w-[280px] border border-gray-100"
          style={
            cardPosition
              ? { left: cardPosition.left, top: cardPosition.top }
              : { left: "auto", right: 16, top: 64 }
          }
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                {selectedCountry.country}
              </h3>
              <p className="text-sm text-gray-500">{selectedCountry.city}</p>
            </div>
            <button
              onClick={resetView}
              className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#4ADE80] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">{selectedCountry.address}</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <p className="text-sm text-gray-600">{selectedCountry.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#4ADE80] flex-shrink-0" />
              <p className="text-sm text-gray-600">{selectedCountry.phone}</p>
            </div>
          </div>
        </div>
      )}

      {/* Hint text */}
      {!isZoomed && (
        <div className="flex justify-center mt-3">
          <span className="text-xs text-gray-400 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-gray-100">
            Tap a highlighted country to zoom in
          </span>
        </div>
      )}
    </div>
  );
}
