import './App.css';
import {Route, useLocation} from 'react-router';
import GlobalStyles from './GlobalStyles';
import Header from '../components/Header';
import ProductDetail from '../components/ProductDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProductDetail/>
      
      <GlobalStyles/>
      
    </div>
  );
}

export default App;
