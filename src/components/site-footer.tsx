export function SiteFooter() {
  return (
    <footer className="p-2 text-white">
      <div className="bg-[#070508] p-12 rounded-4xl">
        <div className="flex flex-col gap-8">
          <div className="flex ">
            <div>
              <img className="w-40" src="/logos/intrepid-logotipo-white.svg" alt="Intrepid" />
            </div>

            <div></div>
          </div>
            <hr />
          <p>
            © 2026 Intrepid. Diseñado y mantenido por <a href="https://www.perroagency.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">PERRO Agency</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
