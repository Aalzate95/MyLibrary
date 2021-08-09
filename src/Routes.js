import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from './views/home/Home';
import Books from './views/books/Books';
import MyLibrary from './views/myLibrary/MyLibrary';
import NotFound from './components/notFound/NotFound'

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>

                <Route path='/books'>
                    <Books/>
                </Route>

                <Route path='/myLibrary'>
                    <MyLibrary/>
                </Route>

                <Route component={NotFound}/>

            </Switch>
        </Router>
     );
}
 
export default Routes;
