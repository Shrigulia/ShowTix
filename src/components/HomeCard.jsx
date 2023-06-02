import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'


const HomeCard = ({ name, gerne, img, id, rating }) => {
    return (
        <>
            <div id={id} className='homeCard'>
                <figure>
                    <img src={img} alt={name} />
                </figure>
                <p>{name}</p>
                <p>{gerne}</p>
                <span> <AiFillStar /> &nbsp;{rating}  </span>
                <Link to={`/movieDetais/${id}`}>Show Details</Link>
            </div>
        </>
    )
}

export default HomeCard