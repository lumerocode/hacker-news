import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Filter from './components/Filter/Filter';
import Card from './components/Card/Card';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //Enrutamiento
import Faves from './Page/Faves';


function App() {

  return(
    <Router>
      <div className='App'>
        <Header />
        <Navbar />
      </div>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/faves' element={<Faves />}></Route>
      </Routes>
    </Router>
  )
 }

  const Home = () => {

  //Estados que recibe y actualiza según 
  const [name, setName] = useState("");

  //Variables para el filtro
  let tech = ["angular", "reactjs", "vuejs"]

  //Estado que recibe y actualiza los datos traidos de la API
  const [newData, setNewData] = useState([]);

  //Destructuración del objeto newData
  const {hits} = newData;

  //Guardamos la API
  const API = `https://hn.algolia.com/api/v1/search_by_date?query=${name}&page=0`;

  useEffect(() => {
    (async function () { 
      const data = await fetch(API) //Hace el llamado a la API en un tiempo
        .then((res) => res.json())  //Devolvemos la respuesta que recibimos en formato Json
        setNewData(data) //Guardamos esa respuesta en setNewData
     })();
  },[API]);

  return (
    <>
      <div className="App">
        
        
        <Filter
        setName={setName}
        tech={tech}
         />
        <section className='container__card'>
          <Card 
            hits={hits}/>
        </section>
      </div>
    </>
  );
}

export default App;
