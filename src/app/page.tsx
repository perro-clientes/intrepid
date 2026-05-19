import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1" />
      <SiteFooter />
    </div>
  );
}
