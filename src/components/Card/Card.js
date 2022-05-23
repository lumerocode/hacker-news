import React, { useState } from 'react'
import './card.css'
import Time from '../../assets/img/time-icon.png' //importamos imagen
import HeartComplete from '../../assets/img/heart-com.png' //importamos imagen
import HeartIncomplete from '../../assets/img/heart-inc.png' //importamos imagen

const Card = ({ hits, setPageNumber }) => {

  const handleSubmit = (e) => {
      e.preventDefault(); //Para cancelar el eventos

      const heart = document.querySelector('.card__right--icon'); //
      heart.querySelector('img').setAttribute('src', HeartComplete); 
  };


/* const paintHeart = e => {
    e.preventDefault();
    const heart = document.querySelector('.card__right--icon');

    e.hits.forEach(item => {
        heart.querySelector('img').setAttribute('src', item.HeartComplete);
    });
}
 */

  //Creamos una variable para guardar todo lo que iremos iterando
  let showCard;

  //Condicional que indica que si hay alguna data en "results" se puede entrar a la condicional para luego iterarl
  if(hits) {

    //Iterando y renderizando cada Card
    showCard = hits.map((item, index) => {

        //Destructuramos hits que contiene las valores de; author, story_title, story_url, created_at
        let {author, story_title, story_url, created_at} = item;

        return (

                //Estructura de las cards
                <a  href={story_url} target='_blank' key={`${index}`}>
                    
                        <div className='card__body'>
                            <div className='card__left'>
                                    <div className='card__left--time'>
                                        <img src={Time}/>
                                        <span>
                                            3 hours ago by {author === "" ? "Unknown" : author}
                                        </span>
                                    </div>
                                    <span className='card__left--description'>
                                    {story_title === "" ? "Unknown" : story_title}
                                    </span>
                            </div>
    
                            <div className='card__right'>
                                <div className='card__right--bg'></div>
                                    <div className='card__right--icon'>
                                            <img 
                                                src={HeartIncomplete}
                                                onClick={handleSubmit} 
                                            />
                                    </div>
                            </div>
                        </div>
                    
                </a>
            
          )
    });

  }

  return (
    <> 
      {/* Mostramos la variable */}
      {showCard} 
    </>
    )
  
}

export default Card