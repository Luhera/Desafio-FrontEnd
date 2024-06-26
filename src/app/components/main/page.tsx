"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Foto1 from "../../../../public/images/Post02.png";
import Foto2 from "../../../../public/images/Post03.png";
import Foto3 from "../../../../public/images/Post04.png";
import Foto4 from "../../../../public/images/Post05.png";

interface Post {
  foto: StaticImageData;
  title: string;
}

export default function Main(): JSX.Element {
  const router = useRouter();

  const posts: Post[] = [
    {
      foto: Foto2,
      title: "10 dicas para conseguir a vaga desejada",
    },
    {
      foto: Foto3,
      title: "Deixe seu código mais semântico com essas dicas",
    },
    {
      foto: Foto4,
      title: "Use essas dicas nas suas aplicações mobile",
    },
  ];

  const handlePostClick = (index: number) => {
    router.push(`posts/${index}`);
  };

  return (
    <main className="bg-white">
      <div className="max-w-[1120px] mx-auto px-4 py-16">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={Foto1}
                alt="Laptop com código"
                className="rounded-lg mb-4 w-full"
                style={{ filter: "brightness(0.8) hue-rotate(270deg)" }}
              />
              <p className="text-[#9E6DC2] mb-2">Janeiro 04, 2022</p>
              <h2
                className="text-[#290742] text-2xl font-bold mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Começando no ReactJS em 2022
              </h2>
              <p
                className="text-[#000000] opacity-80"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                volutpat aenean.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => handlePostClick(0)}
              className="cursor-pointer"
            >
              <p className="text-[#9E6DC2] mb-2">Janeiro 04, 2022</p>
              <h2
                className="text-[#290742] text-xl font-bold mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Conheça as principais técnicas para conseguir uma vaga
                internacional em programação
              </h2>
              <p
                className="text-[#000000] opacity-80"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => handlePostClick(1)}
            >
              <p className="text-[#9E6DC2] mb-2">Janeiro 04, 2022</p>
              <h2
                className="text-[#290742] text-xl font-bold mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Veja a evolução do Front-end na prática
              </h2>
              <p
                className="text-[#000000] opacity-80"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              onClick={() => handlePostClick(index + 2)}
            >
              <Image
                src={item.foto}
                alt={`Main Image ${index + 2}`}
                className="rounded-lg mb-4 w-full aspect-video object-cover"
                style={{ filter: "brightness(0.8) hue-rotate(270deg)" }}
              />
              <p className="text-[#9E6DC2] mb-2 text-sm">Janeiro 04, 2022</p>
              <h2
                className="text-[#290742] text-xl font-bold mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.title}
              </h2>
              <p
                className="text-[#000000] opacity-80 text-sm"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique.
              </p>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
