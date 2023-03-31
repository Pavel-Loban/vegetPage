import React from 'react'
import { Container } from '@mui/system'
import { CardContent, CardMedia, Typography,InputLabel,Input,Button } from '@mui/material'
import appStore from '../../../assets/img/footer/AppStore.svg'
import googlePlay from '../../../assets/img/footer/googlePlay.svg';
import Visa from '../../../assets/img/footer/Visa-light.svg';
import Maestro from '../../../assets/img/footer/Maestro-light.svg'
import MasterCard from '../../../assets/img/footer/MasterCard-light.svg'
import Cirrus from '../../../assets/img/footer/Cirrus-light.svg'
import AmericanExpress from '../../../assets/img/footer/AmericanExpress-light.svg';
import styles from './footerRigth.module.scss'


import { FormControl } from '@mui/material';




const FooterRight = () => {



  return (
    <Container className={styles.footerRight}
    >
      <Typography
        sx={{
          fontSize: '16px',
        }}
      >
        Download App
      </Typography>

      <CardContent className={styles.appBlock}
      // sx={{ display: 'flex', padding: ' 20px 0' }}
      >
        <CardMedia
          image={appStore}
          component="img"
          alt="appStore"
          sx={{ width: 212, cursor: 'pointer', marginRight: '5px' }}
        />
        <CardMedia
          image={googlePlay}
          component="img"
          alt="googlePlay"
          sx={{ width: 215, cursor: 'pointer' }}
        />
      </CardContent>

      <Typography
        sx={{
          fontSize: '16px',
          marginBottom: '20px',
          marginTop: '20px'
        }}
      >
        Sign Up for Our Newsletter
      </Typography>

      <FormControl sx={{display:'flex',
    flexDirection: 'row'}}>
        <InputLabel htmlFor="my-input" sx={{}} >Enter email address</InputLabel>
        <Container sx={{
      background: 'white',height:'60px'}}>
        <Input  id="my-input" aria-describedby="my-helper-text" sx={{width: '100%',
        display: 'flex',
        justifyContent:'center',
        alineItems: 'center',
        fontSize: '20px'
      }}/>
        {/* <FormHelperText id="my-helper-text" sx={{}}>
          Enter email address
        </FormHelperText> */}
        </Container>
        <Button sx={{
      height:'60px',
      borderRadius: '0px',
      background:'#7FAD39'}}>SUBSCRIBE</Button>
      </FormControl>


        <Typography  sx={{
          fontSize: '16px',
          marginBottom: '20px',
          marginTop: '20px',
          // paddingLeft: '0px'
        }}>
        Payment Method
        </Typography>

        <Container
        sx={{ display: 'flex',
      width: '100%',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '20px'}}
      >
        <CardMedia
          image={Visa}
          component="img"
          alt="Visa"
          sx={{ width: 43, cursor: 'pointer' }}
        />
        <CardMedia
          image={Maestro}
          component="img"
          alt="Maestro"
          sx={{ width: 43, cursor: 'pointer' }}
        />
        <CardMedia
          image={MasterCard}
          component="img"
          alt="MasterCard"
          sx={{ width: 43, cursor: 'pointer' }}
        />
        <CardMedia
          image={Cirrus}
          component="img"
          alt="Cirrus"
          sx={{ width: 43, cursor: 'pointer' }}
        />
        <CardMedia
          image={AmericanExpress}
          component="img"
          alt="AmericanExpress"
          sx={{ width: 43, cursor: 'pointer' }}
        />
        </Container>


    </Container>
  )
}

export default FooterRight
