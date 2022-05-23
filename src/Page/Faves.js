import React from 'react'
import Time from '../assets/img/time-icon.png' //Importamos imagen
import HeartComplete from '../assets/img/heart-com.png' //Importamos imagen
import './faves.css' //Importamos estilos

  const Faves = () => {

  //Función
  const handleSubmit = (e) => {
    e.preventDefault(); //Para cancelar el eventos
  };

  return (
            <section className='container__card--faves'>
                <a
                href='#' 
                target='_blank' 
                // key={`${author}-${created_at}`}
                >
                        <div className='card__body'>
                            <div className='card__left'>
                                    <div className='card__left--time'>
                                        <img src={Time}/>
                                        <span>
                                            4 hours ago by Lumero
                                            {/* {author === "" ? "Unknown" : author} */}
                                        </span>
                                    </div>
                                    <span className='card__left--description'>
                                        Hi. Good Day
                                    {/* {story_title === "" ? "Unknown" : story_title} */}
                                    </span>
                            </div>
    
                            <div className='card__right'>
                                <div className='card__right--bg'></div>
                                    <div className='card__right--icon'>
                                            <img 
                                                src={HeartComplete}
                                                onClick={handleSubmit} 
                                            />
                                    </div>
                            </div>
                    </div>
                </a>
            </section>
  )
}

export default Faves