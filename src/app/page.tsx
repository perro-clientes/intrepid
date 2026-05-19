import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ActionButton } from "@/components/ui/action-button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <div className="p-2">
        <div className="bg-[#070508] p-12 rounded-4xl min-h-[400px] h-[60vh] flex align-center justify-center flex-col gap-8">
          <Navbar />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1 text-white">
              <h1 className="text-4xl sm:text-7xl font-thin leading-tight font-heading">No movemos cargas.<br />Movemos decisiones.</h1>
              <p className="text-md font-thin font-body max-w-lg">Acompañamos cada operación con estrategia, precisión y compromiso. Porque en comercio exterior, cada paso cuenta.</p>
            </div>

            <ActionButton
              label="inicia tu consulta"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path fill="none" d="M5 12h14m-7-7l7 7l-7 7"/></svg>
              }
            />
          </div>
        </div>
      </div>
      <main className="flex-1" />
      <SiteFooter />
    </div>
  );
}
