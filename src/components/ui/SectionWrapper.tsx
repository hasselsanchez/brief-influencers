export default function SectionWrapper({
  id,
  className = "",
  bg = "white",
  children,
}: {
  id?: string;
  className?: string;
  bg?: "white" | "rosa" | "dark";
  children: React.ReactNode;
}) {
  const bgClasses = {
    white: "bg-white",
    rosa: "bg-[#FFFAFA]",
    dark: "text-white",
  };

  const darkStyle =
    bg === "dark"
      ? {
          background:
            "radial-gradient(ellipse at 25% 35%, rgba(226,97,83,0.07), transparent 50%), radial-gradient(ellipse at 75% 80%, rgba(33,128,255,0.04), transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(226,97,83,0.03), transparent 60%), #0f1219",
        }
      : undefined;

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-10 px-4 tablet:py-14 tablet:px-6 ${bgClasses[bg]} ${className}`}
      style={darkStyle}
    >
      {children}
    </section>
  );
}
