import logo from './logo.svg';
import './App.css';

import { Home, UserDatails,User } from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">User</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
        </div>
      </nav>






      <Switch>

        <Route path="/home" exact={true} component={Home}/>
  


        <Route path="/user" exact={true} component={User}/>



        <Route path="/user/:id" exact={true} component={UserDatails}/>
        


      </Switch>



      {/* <UserList /> */}
    </Router>

  );
}

export default App;
