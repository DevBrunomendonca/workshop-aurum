import { modaniBold } from "../fonts";
import Profile from "./profile";

const About = () => {
  return (
    <section id="about" className="bg-[url('/banner-about.webp')] bg-cover bg-right bg-no-repeat px-4 py-16">
      <div className="flex flex-col items-center gap-4 max-w-6xl mx-auto md:flex-row ">
        <div className="mx-auto w-full flex flex-col items-center gap-5 ">
          <h2 className={`${modaniBold.className} text-4xl text-white`}>
            O que é o <span className="text-[#F3E902]"> evento?</span>
          </h2>
          <div
            className="h-[1px] w-full max-w-[340px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255, .3) 0%, rgba(255,255,255,0) 90%)",
            }}
          ></div>
          <div className="flex flex-col gap-4">
            <div className="relative flex">
              <Profile srcProfile="/profile-1.svg" />
              <Profile
                className="absolute left-[60px]"
                srcProfile="/profile-4.svg"
              />
              <Profile
                className="absolute left-[120px]"
                srcProfile="/profile-5.svg"
              />
              <Profile
                className="absolute left-[180px]"
                srcProfile="/profile-2.svg"
              />
              <Profile
                className="absolute left-[240px]"
                srcProfile="/profile-3.svg"
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm font-light text-white text-opacity-50">
                Somos dezenas de
              </p>
              <span className={`${modaniBold.className} text-3xl text-white`}>
                TRADERS NOS 5%{" "}
              </span>
            </div>
          </div>
          <div
            className="h-[1px] w-full max-w-[340px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255, 0) 0%, rgba(255,255,255, .3) 90%)",
            }}
          ></div>
        </div>
        <div className="w-full space-y-2">
          <p className="text-white text-sm">
            Para você que deseja de fato prosperar, e quer aprender a entrar e
            entender de verdade, como funciona o Mercado Financeiro, temos um
            convite para você. 
          </p>
          <p className="text-white text-sm"> 
            Nosso Workshop Presencial acontecerá no neste mês
            de outubro, e pode ter certeza que você sairá de lá com uma
            compreensão única sobre o Mercado, e terá todo o suporte para ter
            sucesso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
