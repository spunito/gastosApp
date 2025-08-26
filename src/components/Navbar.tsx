import Link from "next/link"



export const Navbar = () => {
  return (

    <nav className=" w-full p-4 z-font-medium text-black z-99 text-zinc-300 bg-black transition-all fixed">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <h1><b>GastosApp
            </b></h1>
      
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
