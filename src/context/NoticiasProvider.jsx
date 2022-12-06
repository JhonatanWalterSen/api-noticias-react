import { useState, useEffect, createContext } from "react";

const NoticiasConetext = createContext()
const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const handleChangeCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    return(
        <NoticiasConetext.Provider
            value={{
                categoria,
                handleChangeCategoria
            }}
        >
            {children}
        </NoticiasConetext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasConetext