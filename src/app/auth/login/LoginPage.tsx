"use client"; 
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type LoginForm = {
  email: string;
  password: string;
};


export const LoginPage = () => {
  
  const router = useRouter()
  const {register , handleSubmit} = useForm<LoginForm>();

  const onSubmit = async(data:LoginForm) => {
    const res = await signIn("credentials" , {
      email:data.email,
      password:data.password,
      redirect:false,
    });

    if (res?.ok) {
      router.push("/gastos")
    } else {
      console.log("Error al iniciar sesión")
    }
  }

  return (
    
    <>
    <div className='flex min-h-screen'>

      {/* Imagen mitad de la pantalla */}
      <div className="w-1/2 relative h-screen">
        <Image
          src="/images/punpun.jpg"
          alt="Imagen de prueba"
          fill
          className="object-cover"
        />
      </div>

      {/* Formulario mitad de la pantalla */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <form className="w-3/4 max-w-md p-8 bg-white rounded shadow" 
        
        onSubmit={handleSubmit(onSubmit)}>
          
          <h2 className="text-2xl font-bold mb-6">Inicia sesión</h2>
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
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Entrar
          </button>
          {/* Texto para registrarse */}
          <p className="mt-4 text-center text-gray-600">
            ¿No tienes cuenta?{" "}
            <a href="/auth/register" className="text-blue-600 hover:underline">
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </div>
      
    </>
  )
}
