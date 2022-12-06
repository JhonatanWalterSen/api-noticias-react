import { useContext } from "react";
import NoticiasConetext from "../context/NoticiasProvider";


const useNoticias = () =>{
    return useContext(NoticiasConetext)
}

export default useNoticias