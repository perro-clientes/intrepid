import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ActionButton } from "@/components/ui/action-button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F7F7]">
      
      {/* Header */}
      <div className="p-2">
        <div className=" relative bg-black p-6 sm:px-12 rounded-4xl min-h-[400px] h-[80vh] flex justify-center flex-col gap-8">
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

      <main className="flex-1 p-2">
        {/* About */}
        <div className="p-6 sm:px-12 sm:py-20 flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center justify-center mb-4">
                {/* Chip */}
                <span className="bg-primary text-[#070508] py-2 px-8 rounded-full text-[12px]">QUIENÉS SOMOS</span>
                <span className="text-4xl font-bold leading-tight font-heading">Experiencia en cada operación</span>
              </div>

              <p className="max-w-4xl text-[#1C1C1C] font-light font-body">Somos un equipo especializado en logística internacional con amplia experiencia en la coordinación de operaciones de importación y exportación. Contamos con una red global de agentes y proveedores que nos permite operar con eficiencia, agilidad y total confiabilidad.<br /> <br /> Nos enfocamos en brindar soluciones a medida, adaptándonos a las necesidades de cada cliente y asegurando un seguimiento cercano en cada etapa del proceso.</p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-8">
            {/* Card */}
              <div className="p-6 bg-white rounded-4xl   max-w-2xl flex flex-col gap-2">
                <span className="text-xl font-semibold leading-tight font-heading">Misión</span>
                <p className="text-[#1C1C1C] font-light font-body">Brindar soluciones logísticas integrales en comercio exterior, acompañando a nuestros clientes con un servicio personalizado, eficiente y transparente en cada operación.</p>
              </div>

              <div className="p-6 bg-white rounded-4xl   max-w-2xl flex flex-col gap-2">
                <span className="text-xl font-semibold leading-tight font-heading">Vision</span>
                <p className="text-[#1C1C1C] font-light font-body">Ser una empresa referente en logística internacional, reconocida por la calidad de servicio, compromiso y capacidad de adaptación a un mercado global en constante evolución.</p>
              </div>

              <div className="p-6 bg-white rounded-4xl   max-w-2xl flex flex-col gap-2">
                <span className="text-xl font-semibold leading-tight font-heading">Valores</span>
                <p className="text-[#1C1C1C] font-light font-body">Compromiso con el cliente. Transparencia en cada operación. Eficiencia y proactividad. Responsabilidad profesional. Trabajo en equipo. Orientación a resultados.</p>
              </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-2">
          <div className=" relative bg-[#070508] p-6 sm:px-12 py-12 rounded-4xl min-h-[400px] flex justify-center flex-col gap-8">
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

        {/* Services */}
        <div className="p-6 sm:px-12 sm:py-20 flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center justify-center mb-4">
                {/* Chip */}
                <span className="bg-primary text-[#070508] py-2 px-8 rounded-full text-[12px]">SERVICIOS</span>
                <span className="text-4xl font-bold leading-tight font-heading">Soluciones para cada operación</span>
              </div>

              <p className="max-w-lg text-[#1C1C1C] font-light font-body">Integramos cada modalidad de transporte para ofrecerte una solución logística completa, eficiente y sin fricciones.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl">
            {/* Card */}
              <div className="p-6 bg-white rounded-4xl   flex flex-col gap-2">
                <span className="text-xl font-regular leading-tight font-heading">Transporte Aéreo</span>
                <p className="text-[#1C1C1C] font-light font-body">Soluciones ágiles y seguras para cargas urgentes o de alto valor. Coordinamos con aerolíneas internacionales y seguimiento puerta a puerta.</p>
              </div>

              <div className="p-6 bg-white rounded-4xl   flex flex-col gap-2">
                <span className="text-xl font-regular leading-tight font-heading">Transporte Marítimo</span>
                <p className="text-[#1C1C1C] font-light font-body">Operaciones FCL y LCL desde y hacia los principales puertos del mundo. Alternativas competitivas en costos y tiempos de tránsito.</p>
              </div>

              <div className="p-6 bg-white rounded-4xl   flex flex-col gap-2">
                <span className="text-xl font-regular leading-tight font-heading">Transporte Terrestre</span>
                <p className="text-[#1C1C1C] font-light font-body">Retiros, entregas y traslados integrados a la cadena logística con operadores confiables, garantizando cumplimiento y trazabilidad.</p>
              </div>

              <div className="p-6 bg-white rounded-4xl   flex flex-col gap-2">
                <span className="text-xl font-regular leading-tight font-heading">Despacho Aduanero</span>
                <p className="text-[#1C1C1C] font-light font-body">Gestión ágil, precisa y conforme a normativa vigente. Anticipamos contingencias para garantizar una liberación eficiente de la mercadería.</p>
              </div>

              <div className="p-6 bg-white rounded-4xl   flex flex-col gap-2">
                <span className="text-xl font-regular leading-tight font-heading">Seguro de Carga</span>
                <p className="text-[#1C1C1C] font-light font-body">Coberturas diseñadas según tipo de carga, ruta y modalidad. Trabajamos con aseguradoras especializadas para reducir riesgos ante imprevistos.</p>
              </div>

              <div className="p-6 bg-white rounded-4xl   flex flex-col gap-2">
                <span className="text-xl font-regular leading-tight font-heading">Certificaciones</span>
                <p className="text-[#1C1C1C] font-light font-body">Gestión integral de documentación, certificaciones y permisos ante organismos correspondientes. Anticipamos requisitos desde el inicio.</p>
              </div>

              <div className="p-6 bg-white rounded-4xl   w-full flex flex-col sm:flex-row gap-8 sm:col-span-2">
                <div className="rounded-3xl w-full sm:max-w-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/image 1.png')" }}>
                  <div className="aspect-[4/3]" />
                </div>

                <div>
                  <span className="text-xl font-regular leading-tight font-heading">Asesorías</span>
                  <p className="text-[#1C1C1C] font-light font-body">Tu departamento de comercio exterior, sin estructura interna. Nos integramos como socio estratégico aportando experiencia, criterio y ejecución.</p>
                  <span className="text-[#1C1C1C] font-light font-body">¿Qué incluye?</span>
                  <ul className="list-disc list-inside text-[#1C1C1C] font-light font-body space-y-1">
                    <li>Outsourcing de comercio exterior</li>
                    <li>Asistencia a nuevos importadores y exportadores</li>
                    <li>Gestión de documentación</li>
                    <li>Coordinación logística en origen y destino</li>
                    <li>Análisis y optimización de operaciones</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>

        {/* Contact */}
        <div className="p-6 sm:px-12 sm:py-20 flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center justify-center mb-4">
                {/* Chip */}
                <span className="bg-primary text-[#070508] py-2 px-8 rounded-full text-[12px]">CONTACTO</span>
                <span className="text-4xl font-bold leading-tight font-heading">Inicia tu consulta</span>
              </div>

              <p className="max-w-lg text-[#1C1C1C] font-light font-body">Integramos cada modalidad de transporte para ofrecerte una solución logística completa, eficiente y sin fricciones.</p>
          </div>

          <form action="" className="w-full max-w-3xl flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="rounded-[8px] bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1C1C1C]  border-none focus:border-black focus:ring-0"
                />
              <input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  className="rounded-[8px] bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1C1C1C]  border-none focus:border-black focus:ring-0"
                />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                  type="email"
                  name="email"
                  placeholder="Correo electronico"
                  className="rounded-[8px] bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1C1C1C]  border-none focus:border-black focus:ring-0"
                />
              <input
                  type="tel"
                  name="phone"
                  placeholder="Telefono"
                  className="rounded-[8px] bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1C1C1C]  border-none focus:border-black focus:ring-0"
                />
            </div>

            <textarea
                name="message"
                rows={6}
                placeholder="Dejanos tu consulta"
                className="rounded-[8px] bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1C1C1C]  border-none focus:border-black focus:ring-0 resize-none"
              />

            <ActionButton
                label="enviar"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path fill="none" d="M5 12h14m-7-7l7 7l-7 7"/></svg>
                }
              />
          </form>
        </div>


      </main>
      <SiteFooter />
    </div>
  );
}
