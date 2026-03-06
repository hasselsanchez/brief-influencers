export default function DotPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 opacity-40"
      style={{
        backgroundImage: "radial-gradient(circle, #D4D4D4 0.8px, transparent 0.8px)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}
