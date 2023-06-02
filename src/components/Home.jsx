import React, { useState, useEffect } from 'react'
import HomeCard from './HomeCard';
import axios from 'axios';
import Header from './Header';

const Home = () => {
  const [shows, setshows] = useState([]);
  const api = " https://api.tvmaze.com/search/shows?q=all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(api);
        setshows(data.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <Header />
      <section className='homeSection'>
        {
          shows.map((i, index) => {
            return <HomeCard img={i.show.image.medium} key={index} name={i.show.name} gerne={i.show.genres.join(" / ")} id={i.show.id} rating={i.show.rating.average ? i.show.rating.average : 8} />
          })
        }
      </section>
    </>
  )
}

export default Home