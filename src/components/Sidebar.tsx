import Link from "next/link"


export const Sidebar = () => {
  return (
    <div className="flex">
        <nav className="w-64 h-screen bg-gray-800 text-white p-4 border-r border-black fixed">
            <h2 className="text-2xl font-bold mb-6 border-b">GastosApp</h2>

            <ul>
                <Link href="/">  
                    <li>Cerrar sesión</li>
                </Link>

            </ul>

            
            

        </nav>
    </div>
  )
}

