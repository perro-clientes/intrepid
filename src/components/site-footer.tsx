export function SiteFooter() {
  return (
    <footer className="p-2 text-white">
      <div className="bg-[#070508] p-12 rounded-4xl">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between flex-col sm:flex-row gap-8 sm:gap-0">
            <div>
              <img className="w-40 mb-10" src="/logos/intrepid-logotipo-white.svg" alt="Intrepid" />
              <div className="flex flex-row flex-wrap gap-8">
                <div>
                  <p className="text-[#CFD424]">Teléfono</p>
                  <a href="tel:+088123456789">+(088) 123 456 789</a>
                </div>

                <div>
                  <p className="text-[#CFD424]">Correo electrónico</p>
                  <a href="mailto:info@intrepid.com">info@intrepid.com</a>
                </div>
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-8 sm:gap-14">
                <div className="flex flex-col gap-2">
                  <p className="text-[#CFD424]">Teléfono</p>
                  <a href="tel:+088123456789">Terminos y Condiciones</a>
                  <a href="tel:+088123456789">Politicas de privacidad</a>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[#CFD424]">Otros</p>
                  <a href="mailto:info@intrepid.com">Contacto</a>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[#CFD424]">Seguinos en redes</p>
                  <div className="flex flex-row gap-4">
                    <a href="https://www.facebook.com/intrepid" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path fill="none" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/intrepid" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"/></svg>
                    </a>
                  </div>
                </div>
              </div>
          </div>
            <hr />
          <p className="text-sm">
            © 2026 Intrepid. Diseñado y mantenido por <a href="https://www.perroagency.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:underline">PERRO Agency</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
