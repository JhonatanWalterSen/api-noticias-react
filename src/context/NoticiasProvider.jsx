import axios from "axios";
import { useState, useEffect, createContext } from "react";


const NoticiasConetext = createContext()
const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
        const cosultarApi = async () =>{
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
        }
        cosultarApi()
    }, [categoria])

    useEffect(() => {
        const cosultarApi = async () =>{
            const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
            console.log(data);
        }
        cosultarApi()
    }, [pagina])

    const handleChangeCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e,valor) =>{
        setPagina(valor);
    }

    return(
        <NoticiasConetext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina
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