import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export const Home = () => {

  return(

    <>

      <Navbar/>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 min-h-screen">
        {/* Texto */}
        <div>  
          <h1>HOLA AMIGOS</h1>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">

          <Image
            src="/images/punpun.jpg"
            alt="Imagen de prueba"
            width={200}        // Ancho en píxeles
            height={100}
            />
        </div>

        



      </div>




    
    
    </>

  )

}

export default Home;