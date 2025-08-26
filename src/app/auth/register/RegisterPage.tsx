"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

export const RegisterPage = () => {
    
    const {
      register , 
      handleSubmit , 
      formState: { errors }} 
      = useForm<FormValues>();

    const onSubmit = async(data: FormValues) => {
      const res = await fetch('/api/auth/register',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      console.log(json);
    };

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
            
            onSubmit={handleSubmit((onSubmit))}>
              
              <h2 className="text-2xl font-bold mb-6">Regístrate</h2>
              <input
                {...register("name")}
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
                <Link href="/auth/login" className="text-blue-600 hover:underline">Iniciar sesión</Link>
              </p>
            </form>
          </div>
        </div>
          
        </>
  )
}
