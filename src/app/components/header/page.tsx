import LogoIcon from "../../../../public/images/logo";
import Image from "next/image";
import Post from "../../../../public/images/Post01.png";

const Header = () => {
  return (
    <header className="bg-[#290742] text-white border-b-8 border-[#4FFF4B]">
      <div className="max-w-[1120px] mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <LogoIcon />

          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#" className="hover:text-[#4FFF4B]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4FFF4B]">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4FFF4B]">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4FFF4B]">
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar"
              className="bg-[#170027] text-white px-4 py-2 rounded-l-md focus:outline-none w-48"
            />
            <button className="bg-[#9E6DC2] p-2 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </section>

        <section className="flex justify-between items-center">
          <div className="w-1/2 pr-8">
            <h2
              className="text-[#BD8FD4] text-4xl font-bold leading-tight mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Veja o guia definitivo para conquistar seus objetivos como DEV em
              2022
            </h2>
            <p className="text-[#FBF6FF] mt-4 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique placerat hac.
            </p>
            <a
              href="#"
              className="text-[#9E6DC2] font-bold flex items-center"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Veja mais <span className="ml-2">→</span>
            </a>
          </div>
          <div className="w-1/2">
            <Image
              src={Post}
              alt="Código de programação"
              className="rounded-xl"
              width={570}
              height={320}
              objectFit="cover"
            />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
