import './App.css';
import HeroLoading from './Pages/HeroLoading/HeroLoading';
import Home from './Pages/Home/Home';
import AddPage from './Pages/AddPage/AddPage';
import {BrowserRouter,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <HeroLoading /> */}
      <BrowserRouter>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/addpage'>
          <AddPage />
        </Route>
      </BrowserRouter>
          
        
      
      
    </div>
  );
}

export default App;
