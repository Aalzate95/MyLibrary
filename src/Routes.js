import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import React,{useState} from 'react';

import Home from './views/home/Home';
import Books from './views/books/Books';
import MyLibrary from './views/myLibrary/MyLibrary';
import NotFound from './components/notFound/NotFound'
import booksData from './data/libros.json'



const Routes = () => {

    const [books] = useState(booksData.results)
    const [myBooks, setMyBooks] = useState([])

    return ( 
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>

                <Route path='/books'>
                    <Books
                        booksData={books}
                        setMyBooks={setMyBooks}
                        myBooks={myBooks}
                    />
                </Route>

                <Route path='/myLibrary'>
                    <MyLibrary
                        myBooks={myBooks}
                    />
                </Route>

                <Route component={NotFound}/>

            </Switch>
        </Router>
     );
}
 
export default Routes;
