import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './components/header';
import PlaylistSelector from './components/playlist-selector';
import Sliders from './components/sliders';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store/store'

function App() {
  
  useEffect(() => {
    //axios.get("");
  })

  return (
    <Provider store={store}>
      <div className='container'> 
        <HeaderComponent/>
        <PlaylistSelector/>
        <Sliders/>
      </div>
    </Provider>
  );
}

export default App;
