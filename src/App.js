import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './components/home/header';
import PlaylistSelector from './components/home/playlist-selector';
import Sliders from './components/home/sliders';
import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './state/store/store'
import { login } from './services/songservices';
import Home from './components/home/home';
import Login from './components/login/login';
import { BrowserRouter, Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  
  console.log(store)
// create routes, so that the login is just the home route, and then the home page is /home, and our redirect url on the sever will go to /home
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className='container'> 
        <Routes>
          <Route path={'/'} element={<Login/>}/>
          <Route path={'/home'} element={<Home/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
