import ScrollAnimator from "@/components/ui/ScrollAnimator";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import QueEsT1 from "@/components/QueEsT1";
import Separator from "@/components/ui/Separator";
import Diferenciadores from "@/components/Diferenciadores";
import Objetivo from "@/components/Objetivo";
import Audiencia from "@/components/Audiencia";
import Productos from "@/components/Productos";
import Hooks from "@/components/Hooks";
import DosDonts from "@/components/DosDonts";
import Recursos from "@/components/Recursos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Nav />
      <Hero />
      <QueEsT1 />
      <Separator />
      <Diferenciadores />
      <Separator />
      <Objetivo />
      <Audiencia />
      <Separator />
      <Productos />
      <Hooks />
      <Separator />
      <DosDonts />
      <Separator />
      <Recursos />
      <Footer />
    </>
  );
}
