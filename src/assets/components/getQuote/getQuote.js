import axios from 'axios';
import { useState } from "react";

// API call for random quotes

function GetQuote(){
    const [quote, setQuote] = useState('')

    const getQuote = () => {
        axios.get('https://api.quotable.io/random')
        .then((response) => {
        setQuote(`${response.data.content} - ${response.data.author}`)
    })
        .catch((error) => {
        console.log(error);
    })
        }


    return (
        <div>
            <h3>{quote}</h3>
            <button onClick={() => {getQuote()}}>Get Quote</button>
        </div>
    )
}

export default GetQuote;