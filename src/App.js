
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Details from "./Components/Details/Details";
import Registration from './Components/Registration/Registration';
import Authprovider from './Components/Authprovider/Authprovider';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Cart from './Components/Cart/Cart';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <Authprovider className='App'>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Search></Search>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Search></Search>
            <Home></Home>
          </Route>
          <Route exact path='/category/:key'>
            <Details></Details>
          </Route>
          <Route path='/signUp'>
            <Registration></Registration>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/cart'>
            <Cart></Cart>
          </PrivateRoute>
          <PrivateRoute path='/placeOrder'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </Authprovider>
  );
}

export default App;
