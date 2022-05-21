import React, { useState } from 'react'
import './card.css'
import Time from '../../assets/img/time-icon.png'
import HeartComplete from '../../assets/img/heart-com.png'
import HeartIncomplete from '../../assets/img/heart-inc.png'

const Card = ({ hits }) => {

  //Estado
  const [heart, setHeart] = useState([]);

  const handleSubmit = (e) => {
      e.preventDefault();

      const heart = document.querySelector('.card__right--icon');
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

  let showCard;

  if(hits) {

    showCard = hits.map((item) => {


        let {author, story_title, story_url, created_at} = item;

        return (
                <a  href={story_url} target='_blank' key={`${author}-${created_at}`}>
                    <div className='card__body'>
                        <div className='card__left'>
                                <div className='card__left--time'>
                                    <img src={Time}/>
                                    <span>
                                        4 hours ago by {author === "" ? "Unknown" : author}
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