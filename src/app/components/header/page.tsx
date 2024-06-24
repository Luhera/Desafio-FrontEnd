import LogoIcon from "../../../../public/images/logo";
import Image from "next/image";
import Post from "../../../../public/images/Post01.png"; // Substitua pelo caminho da sua imagem

export default function Home() {
  return (
    <header className="container bg-[#290742] text-white px-4 pt-8 pb-6 border-b-4 border-[#00FF00]">
      <section className="container mx-auto flex items-center justify-between px-4 mb-8">
        <div className="flex-shrink-0">
          <LogoIcon />
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex gap-8">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Categorias
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <input
            type="text"
            placeholder="Buscar"
            className="px-4 py-2 text-black rounded-md"
          />
        </div>
      </section>

      <section className="w-full flex flex-col lg:flex-row justify-between items-center mt-20">
        <div className="lg:w-1/2 p-4">
          <h2
            className="text-[#9E6DC2] text-4xl font-bold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2024
          </h2>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.
          </p>
          <button
            className="hidden lg:block bg-transparent text-[#9E6DC2] px-2 py-1 rounded-md  border-[#9E6DC2] hover:bg-[#9E6DC2] hover:text-[#290742] transition-colors duration-300 mt-4"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Veja mais &rarr;
          </button>
        </div>
        <div className="lg:w-1/2 p-4">
          <Image src={Post} alt="Example Image" className="rounded-md" />
        </div>
      </section>
    </header>
  );
}
