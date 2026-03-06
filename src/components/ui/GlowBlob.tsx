export default function GlowBlob({
  className = "",
  color = "rgba(229,144,134,0.2)",
  size = 400,
  blur = 120,
  style,
}: {
  className?: string;
  color?: string;
  size?: number;
  blur?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none z-0 animate-pulse-soft ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
        ...style,
      }}
    />
  );
}
