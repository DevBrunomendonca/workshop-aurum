"use client"

import { AlignJustify } from "lucide-react"
import ListNavHeader from "./list-nav-header"
import Logo from "./logo"
import { useCallback, useEffect, useState } from "react"
import MenuBurguer from "./menu-burguer"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const openMenu = useCallback(() => {
    setMenuOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

const handleResize = useCallback(() => {
  if (window.innerWidth > 1024) {
    closeMenu()
  }
}, [closeMenu])

useEffect(() => {
  const updateBodyOverflow = () => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }
  updateBodyOverflow()
  return () => {
    document.body.style.overflow = ""
  }
}, [menuOpen])

useEffect(() => {
  handleResize()
  window.addEventListener("resize", handleResize)
  return () => {
    window.removeEventListener("resize", handleResize)
  }
}, [handleResize])
  return (
    <header className="relative top-0 righht-0 left-0 w-full z-40">
      <div className=" w-full flex items-center justify-between max-w-6xl mx-auto p-4">
        <Logo />
        <ListNavHeader />
        <AlignJustify size={34} className="block cursor-pointer md:hidden" onClick={openMenu} color="#F3E902"/>
      </div>
      {menuOpen && <MenuBurguer closeMenu={closeMenu}/>}
    </header>
  )
}


export default Header