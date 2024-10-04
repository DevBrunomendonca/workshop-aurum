import Image from "next/image"
import { modaniBold } from "../fonts"

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#F3E902]">
        <div className="max-w-6xl mx-auto px-4 justify-center flex flex-col items-center  md:flex-row">
          <div className="flex w-full flex-col items-start gap-2">
            <h2 className={`${modaniBold.className} text-4xl text-black`}>Dê o Próximo Passo Rumo ao Sucesso</h2>
            <p className="text-sm text-black">Inscreva-se para nosso evento presencial e faça parte dos 5%</p>
            <a
              href="https://checkout.doppus.app/28256588/"
              target="_blank"
              className="rounded-md bg-black px-16 py-4 text-[#F3E902]"
            >
              Quero participar
            </a>
          </div>
          <Image 
          src="/map-pin.svg"
          alt="Icone map pin"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-[450px]" 

        />
        </div>
        <div className="bg-[#242424]">
          <p className="text-white text-center text-sm p-4">© Copyright 2024 Aurum Capital - Developed by Dlack Tecnologia</p>
        </div>
      </div>
    </footer>
  )
}


export default Footer