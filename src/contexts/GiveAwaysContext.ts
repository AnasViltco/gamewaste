import { createContext } from 'react'

export const GiveAwaysContext = createContext({
    giveAways: [],
    setGiveAways: (e: any) => { },
})
