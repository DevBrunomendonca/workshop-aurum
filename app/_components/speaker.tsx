import { modaniBold } from "../layout";
import CardSpeaker from "./card-speaker";

const Speaker = () => {
  return (
    <section className="px-4 py-16 mb-56">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center">
        <div className="flex flex-col space-y-1">
          <h2
            className={`${modaniBold.className} text-center text-4xl text-white`}
          >
            Palestrantes<span className="text-[#F3E902]"> confirmados!</span>
          </h2>
          <p className="text-center text-base text-white text-opacity-50">
            Os melhores palestrantes para ajudar você a decolar de vez no
            mercado de ações
          </p>
        </div>
        <div className="grid items-start justify-center place-items-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <CardSpeaker
            srcProfile="/profile-1.svg"
            dataCard="Sex 18/10"
            timeCard="8:40 às 9:00"
            nameProfile="ADRIANO CAMARGO"
            description="Abertura do workshop"
          />
          <CardSpeaker
            srcProfile="/profile-2.svg"
            dataCard="Sex 18/10"
            timeCard="9:00 às 9:30"
            nameProfile="WAGNER LUIZ"
            description="Oportunidades no Mercado Financeiro: Empreendendo no MF."
          />
          <CardSpeaker
            srcProfile="/profile-3.svg"
            dataCard="Sex 18/10"
            timeCard="9:30 às 10:00"
            nameProfile="THIAGO EVANGELISTA"
            description="Primeiros Passos da sobrevivência e crescimento"
          />
          <CardSpeaker
            srcProfile="/profile-4.svg"
            dataCard="Sex 18/10"
            timeCard="10:00 às 10:30"
            timeCardTwo="11:00 às 11:20"
            nameProfile="CAIO HENRIQUE"
            description="Estratégias Quantitativas: Como Usar os Dados a Seu Favor"
          />
          <CardSpeaker
            srcProfile="/profile-5.svg"
            dataCard="Sex 18/10"
            timeCard="11:20 às 11:45"
            nameProfile="ISMAEL GUIMARÃES"
            description="Gerenciamento de Risco: O Segredo dos 5% que Vencem"
          />
        </div>
        <button className="mx-auto w-full max-w-96 rounded-md bg-[#F3E902] px-8 py-4 text-center text-black">
          Quero credenciar
        </button>
      </div>
    </section>
  );
};

export default Speaker;
