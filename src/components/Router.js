import { BrowserRouter, Route } from 'react-router-dom';

import Home from './home';
import Filter from './filter';
import details from './details';
import Header from './Header';
import Report from './Report';
import Contact from './contact';
import Footer from './Footer';
import about from './about';
import blog from './blog';


function Router() {
    return (
        <BrowserRouter>
        <Header/>
        
            <Route exact path="/" component={Home}></Route>
            <Route path="/filter" component={Filter}></Route>
            <Route path="/details" component={details}></Route>
            <Route path="/report" component={Report}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={about}></Route>
            <Route path="/blog" component={blog}></Route>



        <Footer/>    
        </BrowserRouter>
    )
}

export default Router;