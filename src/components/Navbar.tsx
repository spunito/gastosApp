import Link from "next/link"



export const Navbar = () => {
  return (

    <nav className=" w-full p-4 z-font-medium text-black z-99 text-zinc-300 bg-[#0E0E11]/70 dark:border-b-1 dark:border-zinc-800  backdrop-blur-xs dark:backdrop-blur-xs max-md:z-50 max-md:px-0 transition-all ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-12 font-semibold text-base text-white">
            <li>
              <a
                className="p-3 hover:bg-cyan-700 rounded-md hover:text-white transition-all cursor-pointer" 
                >Inicio</a>
            </li>
            <li>
              <a 
                className="p-3 hover:bg-cyan-700 rounded-md hover:text-white transition-all cursor-pointer"
                >Inicio</a>
            </li>
            <li>
              <a 
                className="p-3 hover:bg-cyan-700 rounded-md hover:text-white transition-all cursor-pointer"
              >Habilidades</a>
            </li>
          </ul>

          <ul className="hidden xl:flex items-end  font-semibold text-base text-white">
            <Link href="/auth/login">
              <li className=" cursor-pointer hover:text-black hover:bg-cyan-700">Iniciar sesión</li>
            </Link>
            
          </ul>

          
      </div>
      </div>

      
    </nav>
  )
}
