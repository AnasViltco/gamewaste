import { createContext } from 'react'

export const FilterContext = createContext({
    type: '',
    setType: (e: any) => { },
    name: '',
    setName: (e: any) => { },
    platForm: '',
    setPlatForm: (e: any) => { }
})
