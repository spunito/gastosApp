//Context + Provider
"use client";
import { createContext, useReducer } from "react";
import { gastosReducer } from "./gastosReducer";

// Tipado para props
interface GastosProviderProps {
  children: React.ReactNode
}

const initialState = {
  gastos: [],
  ingresos: [],
  totalGastos: 0,
  totalIngresos: 0,
  balance: 0,
  isLoading: false,
  error: null
}

export const GastosContext = createContext({});

export const GastosProvider = ({ children }: GastosProviderProps) => {
    const [state, dispatch] = useReducer(gastosReducer, initialState)

    return(
        <GastosContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GastosContext.Provider>
    )
}