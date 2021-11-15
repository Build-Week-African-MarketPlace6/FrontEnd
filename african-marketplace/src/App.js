import './App.css';
import AddForm from './components/AddForm';
// import {Link, Route, Switch} from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import Signup from "./components/Signup";
import useDarkmode from './hooks/useDarkmode';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const [ darkmode, setDarkmode ] = useDarkmode();

  const toggleMode = event => {
    event.preventDefault();
    setDarkmode(!darkmode);
  } 

    return (
      <Router>
        <div className = "App">

          <Route exact path = "/" component = {Login} />
          <Route exact path = "/signup" component = {Signup}/>
        </div>
      </Router>
        // <div className="App">
        //     {/* <Header/>

        //     <Route path='/AddProduct'>
        //         <AddProduct/>
        //     </Route>
        //     <Route path='/Signup'>
        //         <Signup />
        //     </Route>
        //     <Route path='/Login'>
        //         <Login />
        //     </Route>
        //     <Route exact path='/'>
        //         <Home/>
        //     </Route>

        //     <AddForm/> */}
        // </div>
    );
}

export default App;
