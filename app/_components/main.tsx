import { ArrowRight, ArrowUpRight } from "lucide-react";
import { modaniBold, modaniRegular } from "../layout";

const Main = () => {
  return (
    <section className="h-[700px] w-full bg-[url('/banner-home-mobile.webp')] bg-cover bg-center bg-no-repeat">
      <div className="flex h-full flex-col items-center justify-end gap-6 px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <h3 className={`${modaniRegular} text-base text-white`}>
              Workshop Presencial{" "}
            </h3>
            <ArrowUpRight color="#F3E902" />
          </div>
          <h1
            className={`${modaniBold.className} text-center text-4xl text-white`}
          >
            Transforme<span className="text-[#F3E902]"> sua vida com </span>o
            Mercado Financeiro!
          </h1>
          <p className={`${modaniRegular} text-center text-sm`}>
            Você faz parte dos 5% que sobrevive no mercado financeiro!
          </p>
        </div>
        <div className="flex items-center">
          <h4 className="-rotate-90">Faltam</h4>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 flex-col items-center rounded-md bg-[#F3E902] p-2 text-black">
              <span className={`${modaniBold.className} text-2xl`}>17</span>
              <span className="text-xs">dias</span>
            </div>
            <div className="flex h-16 w-16 flex-col items-center rounded-md bg-[#F3E902] p-2 text-black">
              <span className={`${modaniBold.className} text-2xl`}>01</span>
              <span className="text-xs">hora</span>
            </div>
            <div className="flex h-16 w-16 flex-col items-center rounded-md bg-[#F3E902] p-2 text-black">
              <span className={`${modaniBold.className} text-2xl`}>26</span>
              <span className="text-xs">minutos</span>
            </div>
            <div className="flex h-16 w-16 flex-col items-center rounded-md bg-[#F3E902] p-2 text-black">
              <span className={`${modaniBold.className} text-2xl`}>56</span>
              <span className="text-xs">segundos</span>
            </div>
          </div>
        </div>
        <button className="mx-auto w-full max-w-96 rounded-md bg-[#F3E902] px-8 py-4 text-center text-black">
          Quero credenciar
        </button>
        <div className="flex items-center">
          <button className="text-[#F3E902]">Ver Palestrantes</button>
          <ArrowRight color="#F3E902"/>
        </div>
      </div>
    </section>
  );
};

export default Main;
