import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasConetext = createContext()
const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        const cosultarApi = async () =>{
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles);
        }
        cosultarApi()
    }, [categoria])


    const handleChangeCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    return(
        <NoticiasConetext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias
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