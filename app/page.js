import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="p-6 font-[family-name:var(--font-roboto)]">
      <Navbar />
      <Main />
    </div>
  );
}
