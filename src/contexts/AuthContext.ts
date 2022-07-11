import { createContext } from 'react'

export const AuthContext = createContext({ loggedInUser: {}, setLoggedInUser: (e: any) => { } })