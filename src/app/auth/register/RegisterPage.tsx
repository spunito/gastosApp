"use client";
import Image from 'next/image';
import { useForm } from 'react-hook-form';

export const RegisterPage = () => {
    
    const {register , handleSubmit} = useForm();

  return (
    <>
        <div className='flex min-h-screen'>
    
          {/* Imagen mitad de la pantalla */}
          <div className="w-1/2 relative h-screen sm:hidden md:block">
            <Image
              src="/images/monona.jpg"
              alt="Imagen de prueba"
              fill
              className="object-cover"
            />
          </div>
    
          {/* Formulario mitad de la pantalla */}
          <div className="w-1/2 flex items-center justify-center bg-gray-100">
            <form className="w-3/4 max-w-md p-8 bg-white rounded shadow" 
            
            onSubmit={handleSubmit((data , e) => {
              e?.preventDefault();
              console.log(data);
            })}>
              
              <h2 className="text-2xl font-bold mb-6">Regístrate</h2>
              <input
                {...register("nombre")}
                type="text"
                placeholder="Introduce tu nombre o nombre de usuario"
                className="w-full mb-4 p-3 border border-gray-300 rounded"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 border border-gray-300 rounded"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Contraseña"
                className="w-full mb-4 p-3 border border-gray-300 rounded"
              />
              <input
                {...register("password2")}
                type="password"
                placeholder="Repite tú Contraseña"
                className="w-full mb-4 p-3 border border-gray-300 rounded"
              />
              <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
                Entrar
              </button>
              {/* Texto para registrarse */}
              <p className="mt-4 text-center text-gray-600">
                ¿Ya tienes cuenta?{" "}
                <a href="/auth/login
                " className="text-blue-600 hover:underline">
                  Iniciar sesión
                </a>
              </p>
            </form>
          </div>
        </div>
          
        </>
  )
}
