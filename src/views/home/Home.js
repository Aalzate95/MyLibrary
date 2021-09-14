import React from 'react';
import NavBar from '../../components/navBar/NavBar'
import './Home.css'

const dataNovedades = [
    {
        "title":"Añadir libros a mi biblioteca",
        "description" : "Esta nueva funcionalidad permite añadir a favoritos de forma personalizada."
    },
    {
        "title" : "Novedades! nueva lista de novedades del sitio",
        "description":"Apartir de ahora contaremos un pequeño resumen de las funcionalidades que se implementan en cada actualización."
    }
]


const Home = () => {
    return ( 
        <div className="Home">
            <NavBar/>
            <div className="container">
                <div className="Home-novedades">
                    <h1>Novedades</h1>
                    <span></span>
                    <div>
                        {
                            dataNovedades.map(novedad=>{
                                return(
                                    <div>
                                        <h3>{novedad.title}</h3>
                                        <p>{novedad.description}</p>
                                    </div>
                                    )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;