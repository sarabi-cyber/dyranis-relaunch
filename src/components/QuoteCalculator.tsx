import { useState } from "react";
import { services } from "@/data/services";

// ─── Config ────────────────────────────────────────────────────────────────
const BASE_RATE = 5000; // Base annual premium in KES
const VAT_RATE = 0.16;
const MIN_COVERAGE = 100000;
const MAX_COVERAGE = 5000000;

const COVERAGE_TIERS = [
  { label: "Basic", multiplier: 1.0, description: "Essential cover" },
  { label: "Standard", multiplier: 1.5, description: "Recommended" },
  { label: "Premium", multiplier: 2.0, description: "Comprehensive" },
  { label: "Elite", multiplier: 2.5, description: "Maximum protection" },
];

// ─── Helpers ────────────────────────────────────────────────────────────────
const formatKES = (amount: number): string =>
  "KES " +
  Math.round(amount).toLocaleString("en-KE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

// ─── Sub-components ─────────────────────────────────────────────────────────
function ServiceButton({
  service,
  selected,
  onSelect,
}: {
  service: (typeof services)[0];
  selected: boolean;
  onSelect: (service: (typeof services)[0]) => void;
}) {
  return (
    <button
      onClick={() => onSelect(service)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "4px",
        padding: "12px 14px",
        border: selected ? "1.5px solid #D4A574" : "1px solid rgba(0,0,0,0.12)",
        borderRadius: "10px",
        background: selected ? "#FFF8F0" : "#fff",
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.15s ease",
        fontFamily: "'DM Sans', sans-serif",
      }}
      aria-pressed={selected}
    >
      <span style={{ fontSize: "20px" }}>{service.icon}</span>
      <span
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: selected ? "#8B5A2B" : "#1a1a1a",
          lineHeight: 1.3,
        }}
      >
        {service.title}
      </span>
      <span
        style={{
          fontSize: "11px",
          color: selected ? "#B8860B" : "#888",
          fontWeight: 400,
        }}
      >
        {service.slug.replace("-", " ")}
      </span>
    </button>
  );
}

function CoverageButton({
  tier,
  selected,
  onSelect,
}: {
  tier: (typeof COVERAGE_TIERS)[0];
  selected: boolean;
  onSelect: (tier: (typeof COVERAGE_TIERS)[0]) => void;
}) {
  return (
    <button
      onClick={() => onSelect(tier)}
      style={{
        flex: 1,
        padding: "10px 6px",
        border: selected ? "1.5px solid #D4A574" : "1px solid rgba(0,0,0,0.12)",
        borderRadius: "10px",
        background: selected ? "#FFF8F0" : "#fff",
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        transition: "all 0.15s ease",
      }}
      aria-pressed={selected}
    >
      <div
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: selected ? "#8B5A2B" : "#1a1a1a",
        }}
      >
        {tier.label}
      </div>
      <div
        style={{
          fontSize: "11px",
          color: selected ? "#B8860B" : "#888",
          marginTop: "2px",
        }}
      >
        ×{tier.multiplier.toFixed(2)}
      </div>
    </button>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "#f5f7f6",
        borderRadius: "10px",
        padding: "14px 16px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          color: "#888",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          marginBottom: "6px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "17px",
          fontWeight: 600,
          color: "#1a1a1a",
        }}
      >
        {value}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function QuoteCalculator({
  baseRate = BASE_RATE,
  vatRate = VAT_RATE,
  minCoverage = MIN_COVERAGE,
  maxCoverage = MAX_COVERAGE,
  coverageTiers = COVERAGE_TIERS,
}: {
  baseRate?: number;
  vatRate?: number;
  minCoverage?: number;
  maxCoverage?: number;
  coverageTiers?: typeof COVERAGE_TIERS;
}) {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);
  const [coverage, setCoverage] = useState(500000);
  const [coverageTier, setCoverageTier] = useState(coverageTiers[1]);

  const coverageMultiplier = coverage / 1000000;
  const subtotal = baseRate * coverageMultiplier * coverageTier.multiplier;
  const vat = subtotal * vatRate;
  const total = subtotal + vat;

  const handleReset = () => {
    setSelectedService(null);
    setCoverage(500000);
    setCoverageTier(coverageTiers[1]);
  };

  const sectionLabel = {
    fontSize: "11px",
    fontWeight: 600,
    color: "#888",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    marginBottom: "10px",
    fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        maxWidth: "640px",
        margin: "0 auto",
        padding: "2rem 1.25rem",
        color: "#1a1a1a",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "#D4A574",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          DC
        </div>
        <div>
          <div style={{ fontSize: "17px", fontWeight: 600 }}>
            Dyranis Consultancy
          </div>
          <div style={{ fontSize: "12px", color: "#888", marginTop: "1px" }}>
            Insurance quote estimator
          </div>
        </div>
      </div>

      {/* Step 1: Service */}
      <div style={sectionLabel}>1 · Select service</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "8px",
          marginBottom: "1.75rem",
        }}
      >
        {services.map((s) => (
          <ServiceButton
            key={s.slug}
            service={s}
            selected={selectedService?.slug === s.slug}
            onSelect={setSelectedService}
          />
        ))}
      </div>

      {/* Step 2: Coverage Amount */}
      <div style={sectionLabel}>2 · Coverage amount</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "1.75rem",
        }}
      >
        <span style={{ fontSize: "13px", color: "#888", whiteSpace: "nowrap" }}>
          {formatKES(minCoverage)}
        </span>
        <input
          type="range"
          min={minCoverage}
          max={maxCoverage}
          step={50000}
          value={coverage}
          onChange={(e) => setCoverage(parseInt(e.target.value))}
          style={{ flex: 1, accentColor: "#D4A574" }}
          aria-label="Coverage amount slider"
        />
        <span style={{ fontSize: "13px", color: "#888", whiteSpace: "nowrap" }}>
          {formatKES(maxCoverage)}
        </span>
        <span
          style={{
            minWidth: "100px",
            textAlign: "right",
            fontSize: "15px",
            fontWeight: 600,
            color: "#D4A574",
          }}
        >
          {formatKES(coverage)}
        </span>
      </div>

      {/* Step 3: Coverage Tier */}
      <div style={sectionLabel}>3 · Coverage tier</div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "1.75rem",
        }}
      >
        {coverageTiers.map((t) => (
          <CoverageButton
            key={t.label}
            tier={t}
            selected={coverageTier.label === t.label}
            onSelect={setCoverageTier}
          />
        ))}
      </div>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          margin: "0 0 1.5rem",
        }}
      />

      {/* Quote output */}
      {!selectedService ? (
        <div
          style={{
            textAlign: "center",
            padding: "2.5rem 1rem",
            border: "1px dashed rgba(0,0,0,0.15)",
            borderRadius: "12px",
            color: "#aaa",
            fontSize: "14px",
          }}
        >
          Select a service above to generate your quote
        </div>
      ) : (
        <>
          {/* Metric cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginBottom: "1.25rem",
            }}
          >
            <MetricCard label="Base rate" value={formatKES(baseRate)} />
            <MetricCard label="Coverage" value={formatKES(coverage)} />
            <MetricCard label="Subtotal (ex-VAT)" value={formatKES(subtotal)} />
            <MetricCard label={`VAT (${vatRate * 100}%)`} value={formatKES(vat)} />
          </div>

          {/* Quote summary card */}
          <div
            style={{
              background: "#f9fbfa",
              border: "1px solid rgba(212, 165, 116, 0.25)",
              borderRadius: "12px",
              padding: "1.25rem 1.5rem",
              marginBottom: "1rem",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "20px",
                background: "#FFF8F0",
                color: "#8B5A2B",
                marginBottom: "14px",
              }}
            >
              {selectedService.icon} {selectedService.title} quote
            </div>

            {/* Line items */}
            {[
              ["Service", selectedService.title],
              ["Base rate", formatKES(baseRate)],
              ["Coverage", formatKES(coverage)],
              ["Tier", `${coverageTier.label} ×${coverageTier.multiplier.toFixed(2)}`],
              ["Subtotal", formatKES(subtotal)],
              [`VAT ${vatRate * 100}%`, `+ ${formatKES(vat)}`],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px 0",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: "#666" }}>{label}</span>
                <span style={{ fontWeight: 500, color: "#1a1a1a" }}>
                  {value}
                </span>
              </div>
            ))}

            {/* Total */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginTop: "12px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: 600 }}>
                Annual Premium (incl. VAT)
              </span>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#B8860B",
                }}
              >
                {formatKES(total)}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={`https://wa.me/254721361188?text=Hello%20Dyranis%2C%20I%20need%20a%20quote%20for%20${selectedService.title}%20with%20coverage%20of%20${formatKES(coverage)}.%20Estimated%20premium%3A%20${formatKES(total)}`}
            style={{
              display: "block",
              textAlign: "center",
              background: "#D4A574",
              color: "#fff",
              padding: "12px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
              marginBottom: "1rem",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "#C49464";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "#D4A574";
            }}
          >
            Get Full Quote via WhatsApp →
          </a>

          {/* Reset */}
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <button
              onClick={handleReset}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                color: "#aaa",
                textDecoration: "underline",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Reset calculator
            </button>
          </div>

          {/* Disclaimer */}
          <p
            style={{
              fontSize: "11px",
              color: "#bbb",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            Estimate only. Final quote subject to underwriting and policy terms.
            <br />
            Minimum coverage: {formatKES(minCoverage)}
          </p>
        </>
      )}
    </div>
  );
}
