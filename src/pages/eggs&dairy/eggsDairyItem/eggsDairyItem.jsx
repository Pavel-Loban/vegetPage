import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router';
import { Button } from '@mui/material';
import { CardMedia, Typography } from '@mui/material';
import { Container } from '@mui/system'



const EggsDairyItem = () => {


    const navigate = useNavigate();

    const {id} = useParams();

    const handleClick = () => {
        navigate('/eggs&dairy')
    }

    const newArr = 'https://63374daf132b46ee0be02302.mockapi.io/eggs';

  const [error, setError] = useState(null);

  const [eggs, setEggs] = useState(null);

  useEffect(() => {
    axios
      .get(newArr)
      .then((res) => {
        setEggs(res.data)
      })
      .catch((error) => {
        setError(error)
      })
  }, []);

  if (error) return `Error: ${error.message}`

    return !!eggs && (
       (<div>
            <Button variant='contained' onClick={handleClick} >To Eggs & Dairy</Button>

            {eggs.filter((item) => item.id === parseInt(id)).map((item) =>{ return (
                <Container key={item.id} sx={{display: 'flex',
          justifyContent:'center',
          flexDirection:'column',
          }}>
            <CardMedia
            image={item.imgSrc}
            component="img"
            alt="Beverage"
            sx={{ width: 300,
              display: 'flex',
              justifyContent:'center',
              margin: '0 auto',
              marginBottom: '20px'
            }}
          />
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam laborum saepe consequatur perspiciatis repellat sint pariatur, temporibus ullam quo officia quasi rerum, illo quaerat et possimus deleniti explicabo natus nesciunt asperiores nulla nihil soluta a provident tempore? Blanditiis, odio minus fuga earum doloribus libero odit, totam, quibusdam veniam iusto distinctio.
          </Typography>
          </Container>

        ) })  }
        </div>
       )
    );
};

export default EggsDairyItem;