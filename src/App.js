import { Route, Routes } from "react-router";
import './App.css';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { BrowserRouter } from "react-router-dom";
import { AddItems } from "./pages/AddItems";
import { Description } from "./components/Description";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header id='header'>
          <Header/>
        </header>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/additem' element={<AddItems/>}></Route>
          <Route path='/popimage/:id' element={<Description/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
