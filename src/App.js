import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Filter from './components/Filter/Filter';
import Card from './components/Card/Card';

function App() {

  //Estado que recibe y actualiza los datos traidos de la API
  const [newData, setNewData] = useState([]);

  //Destructuración del objeto newData
  const {hits} = newData;

  //Guardamos la API
  const API = "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0";

  useEffect(() => {
    (async function () { 
      const data = await fetch(API) //Hace el llamado a la API en un tiempo
        .then((res) => res.json())  //Devolvemos la respuesta que recibimos en formato Json
        setNewData(data) //Guardamos esa respuesta en setNewData
     })();
  },[API]);


  return (
    <>
      <Header />
      <Navbar />
      <Filter />

      <section className='container__card'>
        <Card 
        
          hits={hits}/>
      </section>
    </>
  );
}

export default App;
