import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="p-6 body-radial-gradient font-[family-name:var(--font-roboto)] scroll-smooth">
      <Navbar />
      <Main />
    </div>
  );
}
