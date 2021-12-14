import './App.css';
import {Route, useLocation} from 'react-router';
import GlobalStyles from './GlobalStyles';
import Main from '../pages/Main';
import SwiperSlice from '../components/SwiperSlice';
import PostDetail from '../pages/PostDetail';;

function App() {
    return (
        <div className="App">
            <GlobalStyles/>
            <Route path='/' component={Main} exact="exact"/>
        </div>
    );
}

export default App;
