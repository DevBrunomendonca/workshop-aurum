import Logo from "./logo"
import { AlignJustify } from "lucide-react"

const Header = () => {
  return (
    <header className="relative">
      <div className="absolute top-0 left-0 w-full flex items-center justify-between max-w-6xl mx-auto p-4">
        <Logo />
        <AlignJustify size={32} color="#F3E902"/>
      </div>
    </header>
  )
}


export default Header