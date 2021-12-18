import './App.css';
import {Route, useLocation} from 'react-router';
import GlobalStyles from './GlobalStyles';
import Header from '../components/Header';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Footer from '../components/Footer';
import PostDetail from '../pages/PostDetail';
import NoCart from '../pages/NoCart'
import Cart from '../pages/Cart'
import PwBtn from '../components/PwBtn';

const showHeader = ({pathname})=> {
  if(pathname === './login' || pathname ==='./signup'){
    return false
  }else {
    return true
  }
}

function App() {

  const location = useLocation()

  return (

    <>
    {
      showHeader(location) && (<><Header/></>)
    }
      <GlobalStyles/>
      <Route path='/' component={Main} exact="exact"/>
      <Route path='/login' component={Login} exact="exact"/>
      <Route path='/cart' component={Cart} exact="exact"/>
      <Route path='/nocart' component={NoCart} exact="exact"/> 
      <Route path='/products/:id' component={PostDetail} exact="exact"/>
      <Route path='/pw' component={PwBtn} exact="exact"/>
      <Footer/>
    </>
  );
}

export default App;
