import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import bcrypt from 'bcrypt'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()    

export const authOptions : NextAuthOptions = {

    adapter: PrismaAdapter(prisma),
    providers : [
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email: {label:"email" , type :"email"},
                password: {label:"password" , type:"password"}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password) return null

                const user = await prisma.user.findUnique({
                    where: {email: credentials.email}
                });
                if(!user) return null;

                const isValid = await bcrypt.compare(credentials.password ,user.password)

                if(isValid){
                    return {id:user.id.toString() , email:user.email , name:user.name}
                }
                return null;
            }

        })
    ],
    session:{strategy:"jwt"},
    pages:{
        signIn:"/auth/login"
    }

}