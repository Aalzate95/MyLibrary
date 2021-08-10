import React from 'react';
import NavBar from '../../components/navBar/NavBar'
import './Books.css'

const Books = ({booksData,setMyBooks,myBooks}) => {

    const onClickAddBook = (book) =>{
        let newMyBooks = myBooks
        newMyBooks.push(book)
        setMyBooks(newMyBooks)
    }

    const renderBooks = booksData.map(book=>{
        return(
            <div key={book.id} className="card-book">
                <h2>{book.title}</h2>
                <div className="content-book">
                    <p>{book.authors}</p>
                    <img alt="Portada" className="portada" src={book.image}></img>
                    <p>{book.resume}</p>
                    <button onClick={()=>{onClickAddBook(book)}}>Añadir</button>
                </div>
            </div>
            )
    })

    return ( 
        <div className="Books">
            <NavBar/>
            <div className="container">
                <h1>Lista de libros</h1>
                <div className="grid-books">
                    {renderBooks}
                </div>
            </div>
        </div>
     );
}
 
export default Books;
