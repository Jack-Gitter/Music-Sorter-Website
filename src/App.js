import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
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
import './styles/general.css'

function App() {
  

  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className> 
        <Routes>
          <Route index element={<Login/>}/>
          <Route path={'/home/*'} element={<Home/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
