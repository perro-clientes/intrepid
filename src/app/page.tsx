import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ActionButton } from "@/components/ui/action-button";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { HeroSection } from "@/components/ui/hero-section";
import { ArrowRightIcon } from "@/components/ui/icons";

const inputClass = "rounded-[8px] bg-white border-none px-4 py-3 text-sm text-foreground focus:border-ring focus:ring-0 min-h-[40px]";
const textareaClass = "rounded-[8px] bg-white border-none px-4 py-3 text-sm text-foreground focus:border-ring focus:ring-0 resize-none min-h-[40px]";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">

      {/* Hero */}
      <HeroSection className="h-[80vh]" background="linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, #000000c5 100%), url('/image-1.png') lightgray 50% / cover no-repeat">
        <Navbar />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1 text-white">
            <h1 className="text-4xl sm:text-8xl font-thin leading-tight font-heading">No movemos cargas.<br />Movemos decisiones.</h1>
            <p className="text-md font-thin font-body max-w-lg">Acompañamos cada operación con estrategia, precisión y compromiso. Porque en comercio exterior, cada paso cuenta.</p>
          </div>
          <ActionButton label="inicia tu consulta" icon={<ArrowRightIcon />} />
        </div>
      </HeroSection>

      <main className="flex-1 p-2">
        {/* About */}
        <div id="about" className="p-6 sm:px-12 sm:py-20 flex flex-col items-center justify-center gap-8">
          <SectionHeader
            chip="QUIÉNES SOMOS"
            heading="Experiencia en cada operación"
            description="Somos un equipo especializado en logística internacional con amplia experiencia en la coordinación de operaciones de importación y exportación. Contamos con una red global de agentes y proveedores que nos permite operar con eficiencia, agilidad y total confiabilidad. Nos enfocamos en brindar soluciones a medida, adaptándonos a las necesidades de cada cliente y asegurando un seguimiento cercano en cada etapa del proceso."
          />

          <div className="flex flex-wrap sm:flex-nowrap gap-8">
            <ServiceCard title="Misión" description="Brindar soluciones logísticas integrales en comercio exterior, acompañando a nuestros clientes con un servicio personalizado, eficiente y transparente en cada operación." />
            <ServiceCard title="Visión" description="Ser una empresa referente en logística internacional, reconocida por la calidad de servicio, compromiso y capacidad de adaptación a un mercado global en constante evolución." />
            <ServiceCard title="Valores" description="Compromiso con el cliente. Transparencia en cada operación. Eficiencia y proactividad. Responsabilidad profesional. Trabajo en equipo. Orientación a resultados." />
          </div>
        </div>

        {/* CTA Banner */}
        <HeroSection background="linear-gradient(-90deg, rgba(0, 0, 0, 0.00) 0%, #000000c5 100%), url('/image-1.png') lightgray 50% / cover no-repeat">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1 text-white">
              <h1 className="text-4xl sm:text-7xl font-thin leading-tight font-heading">No movemos cargas.<br />Movemos decisiones.</h1>
              <p className="text-md font-thin font-body max-w-lg">Acompañamos cada operación con estrategia, precisión y compromiso. Porque en comercio exterior, cada paso cuenta.</p>
            </div>
            <ActionButton label="inicia tu consulta" icon={<ArrowRightIcon />} />
          </div>
        </HeroSection>

        {/* Services */}
        <div id="services" className="p-6 sm:px-12 sm:py-20 flex flex-col items-center justify-center gap-8">
          <SectionHeader
            chip="SERVICIOS"
            heading="Soluciones para cada operación"
            description="Integramos cada modalidad de transporte para ofrecerte una solución logística completa, eficiente y sin fricciones."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl">
            <ServiceCard title="Transporte Aéreo" description="Soluciones ágiles y seguras para cargas urgentes o de alto valor. Coordinamos con aerolíneas internacionales y seguimiento puerta a puerta." />
            <ServiceCard title="Transporte Marítimo" description="Operaciones FCL y LCL desde y hacia los principales puertos del mundo. Alternativas competitivas en costos y tiempos de tránsito." />
            <ServiceCard title="Transporte Terrestre" description="Retiros, entregas y traslados integrados a la cadena logística con operadores confiables, garantizando cumplimiento y trazabilidad." />
            <ServiceCard title="Despacho Aduanero" description="Gestión ágil, precisa y conforme a normativa vigente. Anticipamos contingencias para garantizar una liberación eficiente de la mercadería." />
            <ServiceCard title="Seguro de Carga" description="Coberturas diseñadas según tipo de carga, ruta y modalidad. Trabajamos con aseguradoras especializadas para reducir riesgos ante imprevistos." />
            <ServiceCard title="Certificaciones" description="Gestión integral de documentación, certificaciones y permisos ante organismos correspondientes. Anticipamos requisitos desde el inicio." />

            <div className="p-6 bg-white rounded-4xl w-full flex flex-col sm:flex-row gap-8 sm:col-span-2">
              <div className="rounded-3xl w-full sm:max-w-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/image-16.png')" }}>
                <div className="aspect-[4/3]" />
              </div>
              <div>
                <span className="text-xl font-regular leading-tight font-heading">Asesorías</span>
                <p className="text-foreground font-light font-body">Tu departamento de comercio exterior, sin estructura interna. Nos integramos como socio estratégico aportando experiencia, criterio y ejecución.</p>
                <span className="text-foreground font-light font-body">¿Qué incluye?</span>
                <ul className="list-disc list-inside text-foreground font-light font-body space-y-1">
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
          <SectionHeader
            chip="CONTACTO"
            heading="Inicia tu consulta"
            description="Integramos cada modalidad de transporte para ofrecerte una solución logística completa, eficiente y sin fricciones."
          />

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

      </main>
      <SiteFooter />
    </div>
  );
}
