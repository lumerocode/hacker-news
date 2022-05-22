import React, { useState } from 'react'
import './card.css'
import Time from '../../assets/img/time-icon.png'
import HeartComplete from '../../assets/img/heart-com.png'
import HeartIncomplete from '../../assets/img/heart-inc.png'
import InfiniteScroll from 'react-infinite-scroll-component';

const Card = ({ newData, setPageNumber }) => {

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

  if(newData) {

    showCard = newData.map((item, index) => {


        let {author, story_title, story_url, created_at} = item;

        return (
            
                <a  href={story_url} target='_blank' key={`${index}`}>
                    <InfiniteScroll
                    dataLength={newData.length}
                    hasMore={true}
                    next={() => setPageNumber((prevPage) => prevPage + 1)}
                    >
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
                    </InfiniteScroll>
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