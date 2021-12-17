import './App.css';
import {Route, useLocation} from 'react-router';
import GlobalStyles from './GlobalStyles';
import Header from '../components/Header';
import Main from '../pages/Main';
import Comment from '../components/Comment';
import Login from '../pages/Login';
import Footer from '../components/Footer';
import PostItem from '../components/PostItem';
import PostDetail from '../pages/PostDetail';

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
      <Route path='/comment' component={Comment} exact="exact"/>
      <Route path='/login' component={Login} exact="exact"/>
      <Route path='/post' component={PostItem} exact="exact"/>
      <Route path='/products/:id' component={PostDetail} exact="exact"/>
      <Footer/>
    </>
  );
}

export default App;
