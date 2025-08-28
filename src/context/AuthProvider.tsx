"use client"

import { SessionProvider } from "next-auth/react"
import { GastosProvider } from "./GastosContext"

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <SessionProvider>
      <GastosProvider>
        {children}
      </GastosProvider>
    </SessionProvider>
  )
}