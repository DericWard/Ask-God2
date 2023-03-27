import axios from 'axios';
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Paper, Typography } from '@mui/material';
import { width } from '@mui/system';

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

        <Box sx={{
            display: 'flex', 
            textAlign: 'center',
            justifyContent: 'center',
            width: '200px'
        }}> 
            <Paper elevation={5}>
                <Typography 
                    sx={{fontSize: 20}}
                    variant='h3'
                    >{quote}</Typography>
                <Button
                    sx={{'hover': {bgcolor: 'darkblue'}}} 
                    variant="contained" 
                    onClick={() => {getQuote()}}>Get Quote</Button>

            </Paper>
        </Box>
    
    )
}


export default GetQuote;