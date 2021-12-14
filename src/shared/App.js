import './App.css';
import {Route, useLocation} from 'react-router';
import GlobalStyles from './GlobalStyles';
import Header from '../components/Header';
import ProductDetail from '../components/ProductDetail';
import Main from '../pages/Main';


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Route path='/detail' component={ProductDetail} exact="exact"/>
      <Route path='/' component={Main} exact="exact"/>
    </div>
  );
}

export default App;
