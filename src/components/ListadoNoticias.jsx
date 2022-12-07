import { Grid, Typography } from '@mui/material'
import React from 'react'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'


const ListadoNoticias = () => {

    const {noticias} = useNoticias()
    return (
        <>
            <Typography
                textAlign='center'
                marginY={5}
                variant="h3"
                component="h2"
            >
                Últimas Noticias
            </Typography>

            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    >

                    </Noticia>
                ))}
            </Grid>
        </>
    )
}

export default ListadoNoticias