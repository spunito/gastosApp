import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export const Home = () => {

  return(

    <>

      <Navbar/>
      <div className="bg-gray-800 min-h-screen">
        <div className="flex flex-col md:flex-row justify-center items-center px-6 min-h-screen bg-red-500 max-w-7xl mx-auto">
          {/* Texto */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">  

            <h1 className="text-white justify-left  ">Titulo</h1>

            <p className="mt-4 text-lg text-white justify-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto fugit, itaque dolores animi tempore quaerat ut impedit distinctio qui doloribus
              quam labore temporibus veritatis in corrupti, molestiae sapiente atque?</p>

          </div>


          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">

            <Image
              src="/images/punpun.jpg"
              alt="Imagen de prueba"
              width={800}        // Ancho en píxeles
              height={120}
              />
          </div>
        </div>
      </div>
    </>

  )

}

export default Home;