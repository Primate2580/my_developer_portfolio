import { createContext, useContext } from 'react'

// Shared by BurstProvider (provides it) and the cover cards (use it).
export const BurstContext = createContext(() => {})
export const useBurst = () => useContext(BurstContext)
