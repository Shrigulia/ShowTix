import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const MovieDetails = () => {
    const params = useParams();
    const [name, setname] = useState('');
    const [language, setlanguage] = useState('');
    const [gerne, setgerne] = useState([]);
    const [premier, setpremier] = useState('');
    const [time, settime] = useState('');
    const [day, setday] = useState('');
    const [img, setimg] = useState('');
    const [summary, setsummary] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [click, setclick] = useState(false);


    function validatePhoneNumber(event) {
        const value = event.target.value.replace(/\D/g, '');
        const trimmedValue = value.slice(0, 12);

        let formattedValue = trimmedValue;
        if (!trimmedValue.startsWith('91')) {
            formattedValue = '91' + trimmedValue;
        }

        setPhoneNumber(formattedValue);
    }


    const api = " https://api.tvmaze.com/search/shows?q=all";

    useEffect(() => {
        const fetchingdetails = async () => {
            try {
                const { data } = await axios.get(api);
                const filterdata = data.filter((i) => i.show.id === parseInt(params.id))
                const show = filterdata[0].show;
                // console.log(realdata[0].show.genres)
                setname(show.name);
                setlanguage(show.language);
                setgerne(show.genres);
                setpremier(show.premiered);
                settime(show.schedule.time);
                setday(show.schedule.days?show.schedule.days:"Sunday");
                setimg(show.image.original);
                setsummary(show.summary.replace(/<\/?[^>]+(>|$)/g, ''));
            } catch (error) {
                console.log(error)
            }
        }
        fetchingdetails();
    }, [params.id])

    const submitHandler = (e) => {
        e.preventDefault();
        toast.success("Successfuly Booked");
        setclick(false);
    }

    return (
        <>
            <section className={`movieDetail ${click ? "blur" : ""}`}>
                {/* img section */}
                <div className="imgSection" style={{ backgroundImage: `url(${img})` }}>
                    <div className="fade"></div>
                </div>
                {/* info section */}
                <div className="infoSection">
                    <h2>{name}</h2>
                    <h5>{gerne.length ? gerne.join(" / ") : ""}</h5>
                    <p className='summary'>{summary}</p>
                    <p className='language'>language - {language}</p>
                    <p className='premier'>Premier on {premier} / {day.length>0?day:"Sunday"} at {time.length>0?time:"9:00"}</p>
                    <button onClick={() => setclick(true)}>Book Now</button>
                </div>
            </section>

            {/* form */}
            <form onSubmit={submitHandler} className={click ? "formComes" : ""}>
                <h1>ShowTix</h1>
                <input className='disable' type="text" value={name} />
                <input className='disable' type="date" value={premier} />
                <input className='disable' type="time" value={time} />
                <input type="text" placeholder='Name' required />
                <input
                    required
                    type='tel'
                    value={phoneNumber ? '+' + phoneNumber : ''}
                    onInput={validatePhoneNumber}
                    placeholder='Phone Number'
                />
                <button type='submit'>Book</button>
            </form>
        </>
    )
}

export default MovieDetails