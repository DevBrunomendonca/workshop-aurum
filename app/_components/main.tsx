import { ArrowRight, ArrowUpRight } from "lucide-react";
import VideoBanner from "./banner-video";
import Countdown from "./count-down";
import { modaniBold } from "../fonts";

const Main = () => {
  return (
    <section id="home" className="relative h-[700px] mt-0 w-full bg-[url('/banner-home-mobile.webp')] bg-cover bg-center bg-no-repeat  py-16 lg:bg-none md:mt-24 lg:mt-0">
      <VideoBanner />
      <div className="mx-auto px-4 flex h-full max-w-4xl flex-col items-center justify-end gap-6 lg:items-start lg:justify-center lg:-mt-10">
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <div className="flex items-center gap-2">
            <h3 className="text-base text-white">
              Workshop Presencial{" "}
            </h3>
            <ArrowUpRight color="#F3E902" />
          </div>
          <h1
            className={`${modaniBold.className} max-w-[480px] text-center text-4xl text-white lg:text-start`}
          >
            Transforme<span className="text-[#F3E902]"> sua vida com </span>o
            Mercado Financeiro!
          </h1>
          <p className="text-center text-sm">
            Você faz parte dos 5% que sobrevive no mercado financeiro!
          </p>
        </div>
        <div className="flex items-center">
          <h4 className="-rotate-90 text-white text-base">Faltam</h4>
          <Countdown />
        </div>
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center justify-center gap-4 lg:ml-0 lg:flex-row">
          <a
            href="https://checkout.doppus.app/62522663/"
            target="_blank"
            className="w-full rounded-md bg-[#F3E902] px-8 py-4 text-center text-black lg:ml-0"
          >
            Quero participar
          </a>
          <a
            href="#speaker"
            className="flex w-full items-center justify-center px-2 py-4 text-[#F3E902]"
          >
            Ver Palestrantes <ArrowRight color="#F3E902" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
