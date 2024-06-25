import Image from "next/image";
import Foto from "../../public/images/Contrucao.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-700 mb-6">
            Oops! Esta página ainda não existe.
          </p>
          <p className="text-gray-600 mb-8">
            Estamos trabalhando duro para construir algo incrível aqui. Por
            favor, volte mais tarde!
          </p>
          <div className="w-full h-64 relative mb-8">
            <Image
              src={Foto}
              alt="Em construção"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Voltar para a Página Inicial
          </a>
        </div>
      </div>
    </div>
  );
}
