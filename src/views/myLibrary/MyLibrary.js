import React from 'react';
import NavBar from '../../components/navBar/NavBar'

const MyLibrary = ({myBooks}) => {

    const renderBooks = (myBooks) =>{

        let misLibros = myBooks.map(book=>{
            return(
                <div key={book.id} className="card-book">
                    <h2>{book.title}</h2>
                    <div className="content-book">
                        <p>{book.authors}</p>
                        <img alt="Portada" className="portada" src={book.image}></img>
                        <p>{book.resume}</p>
                    </div>
                </div>
                )
        })

        return misLibros
    }

    return ( 
        <div className="MyLibrary">
            <NavBar/>
            <div className="container">
                <h1>Mi libreria</h1>
                <div className="grid-books">
                    {myBooks.length > 0? renderBooks(myBooks):<p>No hay libros agregados.</p>}
                </div>
            </div>
        </div>
     );
}
 
export default MyLibrary;