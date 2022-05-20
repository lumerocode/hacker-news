import React from 'react'
import './card.css'
import Time from '../../assets/img/time-icon.png'
import HeartComplete from '../../assets/img/heart-com.png'
import HeartIncomplete from '../../assets/img/heart-inc.png'

const Card = () => {
  return (
    <section className='container__card'>

        <div className='card__body'>
            <div className='card__left'>
                <div className='card__left--time'>
                    <img src={Time}/>
                    <span>
                        4 hours ago by author
                    </span>
                </div>
                <span className='card__left--description'>
                Realize for React for Visualizing State ﬂow and component hierarchy.
                </span>
            </div>
            <div className='card__right'>
                <div className='card__right--bg'></div>
                <div className='card__right--icon'>
                    <img src={HeartComplete} />
                </div>
            </div>
        </div>

        <div className='card__body'>
            <div className='card__left'>
                <div className='card__left--time'>
                    <img src={Time}/>
                    <span>
                        3 hours ago by author
                    </span>
                </div>
                <span className='card__left--description'>
                    Yes, React is taking over front-end development. The question is why.
                </span>
            </div>
            <div className='card__right'>
                <div className='card__right--bg'></div>
                <div className='card__right--icon'>
                    <img src={HeartIncomplete} />
                </div>
            </div>
        </div>

        <div className='card__body'>
            <div className='card__left'>
                <div className='card__left--time'>
                    <img src={Time}/>
                    <span>
                        4 hours ago by author
                    </span>
                </div>
                <span className='card__left--description'>
                Realize for React for Visualizing State ﬂow and component hierarchy.
                </span>
            </div>
            <div className='card__right'>
                <div className='card__right--bg'></div>
                <div className='card__right--icon'>
                    <img src={HeartComplete} />
                </div>
            </div>
        </div>

        <div className='card__body'>
            <div className='card__left'>
                <div className='card__left--time'>
                    <img src={Time}/>
                    <span>
                        3 hours ago by author
                    </span>
                </div>
                <span className='card__left--description'>
                    Yes, React is taking over front-end development. The question is why.
                </span>
            </div>
            <div className='card__right'>
                <div className='card__right--bg'></div>
                <div className='card__right--icon'>
                    <img src={HeartIncomplete} />
                </div>
            </div>
        </div>

        <div className='card__body'>
            <div className='card__left'>
                <div className='card__left--time'>
                    <img src={Time}/>
                    <span>
                        4 hours ago by author
                    </span>
                </div>
                <span className='card__left--description'>
                Realize for React for Visualizing State ﬂow and component hierarchy.
                </span>
            </div>
            <div className='card__right'>
                <div className='card__right--bg'></div>
                <div className='card__right--icon'>
                    <img src={HeartComplete} />
                </div>
            </div>
        </div>

        <div className='card__body'>
            <div className='card__left'>
                <div className='card__left--time'>
                    <img src={Time}/>
                    <span>
                        3 hours ago by author
                    </span>
                </div>
                <span className='card__left--description'>
                    Yes, React is taking over front-end development. The question is why.
                </span>
            </div>
            <div className='card__right'>
                <div className='card__right--bg'></div>
                <div className='card__right--icon'>
                    <img src={HeartIncomplete} />
                </div>
            </div>
        </div>

        <div className='card__body'>
            <div className='card__left'>
                <div className='card__left--time'>
                    <img src={Time}/>
                    <span>
                        4 hours ago by author
                    </span>
                </div>
                <span className='card__left--description'>
                Realize for React for Visualizing State ﬂow and component hierarchy.
                </span>
            </div>
            <div className='card__right'>
                <div className='card__right--bg'></div>
                <div className='card__right--icon'>
                    <img src={HeartComplete} />
                </div>
            </div>
        </div>

        <div className='card__body'>
            <div className='card__left'>
                <div className='card__left--time'>
                    <img src={Time}/>
                    <span>
                        3 hours ago by author
                    </span>
                </div>
                <span className='card__left--description'>
                    Yes, React is taking over front-end development. The question is why.
                </span>
            </div>
            <div className='card__right'>
                <div className='card__right--bg'></div>
                <div className='card__right--icon'>
                    <img src={HeartIncomplete} />
                </div>
            </div>
        </div>

        
    </section>
  )
}

export default Card