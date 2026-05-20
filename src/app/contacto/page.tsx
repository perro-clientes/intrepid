import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ActionButton } from "@/components/ui/action-button";
import { ArrowRightIcon } from "@/components/ui/icons";

const inputClass = "rounded-[8px] bg-white border-none px-4 py-3 text-sm text-foreground focus:border-ring focus:ring-0 min-h-[40px]";
const textareaClass = "rounded-[8px] bg-white border-none px-4 py-3 text-sm text-foreground focus:border-ring focus:ring-0 resize-none min-h-[40px]";

export default function ContactoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <div className="p-2">
        <div className="relative p-6 sm:px-12 rounded-4xl min-h-[400px] h-[80vh] flex justify-center items-center gap-15 bg-cover bg-center bg-no-repeat" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, #000000c5 100%), url('/image-1.png') lightgray 50% / cover no-repeat" }}>
          <Navbar />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1 text-white">
              <h1 className="text-4xl sm:text-8xl font-thin leading-tight font-heading">Contáctanos</h1>
              <p className="text-md font-thin font-body max-w-lg">Estamos listos para ayudarte con tu próxima operación de comercio exterior.</p>
            </div>

            <ActionButton
              label="escríbenos"
              icon={<ArrowRightIcon />}
            />
          </div>

          <form action="" className="w-full max-w-3xl flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input type="text" name="name" placeholder="Nombre" className={inputClass} />
              <input type="text" name="company" placeholder="Empresa" className={inputClass} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input type="email" name="email" placeholder="Correo electrónico" className={inputClass} />
              <input type="tel" name="phone" placeholder="Teléfono" className={inputClass} />
            </div>

            <textarea name="message" rows={6} placeholder="Dejanos tu consulta" className={textareaClass} />

            <ActionButton label="enviar" icon={<ArrowRightIcon />} />
          </form>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
