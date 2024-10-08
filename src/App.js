
import './App.css';
import ClassComponents from './components/ClassComponents';

// React Slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Routes 

import {Routes, Route} from "react-router-dom"

// Pages

import HomePage from './pages/Home.Page';
import PlayPage from './pages/Play.Page';
import MoviePage from './pages/Movie.Page';


function App() {
  return <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/movie/:id'element={<MoviePage/>}/>
    <Route path='/plays/' element={<PlayPage/>}/>
  </Routes>
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="text-3xl font-bold underline">Hello !</h1>
      </header>
    </div>
  );
} */

export default App;
