import './App.css';
import {Route, useLocation} from 'react-router';
import GlobalStyles from './GlobalStyles';
import Header from '../components/Header';
import ProductDetail from '../components/ProductDetail';
import Main from '../pages/Main';
import Comment from '../components/Comment';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Footer from '../components/Footer';
import PostItem from '../components/PostItem';


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Route path='/' component={Main} exact="exact"/>
      <Route path='/detail' component={ProductDetail} exact="exact"/>
      <Route path='/comment' component={Comment} exact="exact"/>
      <Route path='/login' component={Login} exact="exact"/>
      <Route path='/signup' component={SignUp} exact="exact"/>
      <Route path='/post' component={PostItem} exact="exact"/>
      <Footer/>
    </div>
  );
}

export default App;
