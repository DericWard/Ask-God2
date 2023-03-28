/* eslint-disable */
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from '@mui/material';


// API call component for random quotes

function GetQuote(){
    const [quote, setQuote] = useState('');
    
    useEffect(() => {
        const interval = setInterval(() => {

            axios.get('https://api.quotable.io/random?author=albert-einstein')

            .then((response) => {
            setQuote(`${response.data.content} - ${response.data.author}`)
        })
            .catch((error) => {
            console.log(error);
        })
        }, 10000);

        return () => clearInterval(interval)
    }, [])

    return (
        <Box sx={{
            display: 'flex', 
            textAlign: 'center',
            justifyContent: 'center',
        }}> 
            <Paper elevation={5}>
                <Typography 
                    sx={{fontSize: 20}}
                    variant='h3'
                    >{quote}</Typography>
            </Paper>
        </Box>
    )
}

export default GetQuote;