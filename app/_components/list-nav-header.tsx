const ListNavHeader = () => {
  return (
    <nav className="hidden items-center justify-center gap-8 md:flex" >
      <ul className="flex items-center gap-4 ">
        <a href="#home"><li className="text-white text-sm transition delay-150 hover:text-[#F3E902]">Início</li></a>
        <a href="#about"><li className="text-white text-sm transition delay-150 hover:text-[#F3E902]">Sobre o whorkshop</li></a>
        <a href="#speaker"><li className="text-white text-sm transition delay-150 hover:text-[#F3E902]">Palestrantes</li></a>
        <a href="#location"><li className="text-white text-sm transition delay-150 hover:text-[#F3E902]">Localização</li></a>
      </ul>
      <a href="https://checkout.doppus.app/28256588/" target="_blank" className="rounded-md bg-[#F3E902] px-8 py-2 text-center text-black">Quero participar</a>
    </nav>
  );
};

export default ListNavHeader;
