import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import logoFooter from '../../../assets/img/footer/footerLogo.svg'
import Link from '@mui/material/Link'
import styles from './footerLeft.module.scss'

const FooterLeft = () => {
  return (
    <Container className={styles.footerLeft}
    sx={{
      // flex: '0 1 50%',
    display: 'flex',
    // flexDirection: 'row',
    marginLeft: '0'
  }}
    >
      <Card
        sx={{
          background: 'black',
          color: 'white',
          // width: '100%',
          flex: '0 1 40%'
        }}
      >
        <CardMedia
          image={logoFooter}
          component="img"
          alt="logoFooter"
          sx={{ width: 106, cursor: 'pointer' }}
        />
        <CardContent
          sx={{ paddingLeft: '0', lineHeight: '30px', fontSize: '14px',

         }}
        >
          <Typography
            sx={{
              lineHeight: '30px',
              fontSize: '14px',
              cursor: 'pointer',
            //   marginTop: '20px',
            }}
          >
            Address: 60-49 Road 11378 New York
          </Typography>
          <Typography
            sx={{ lineHeight: '30px', fontSize: '14px', cursor: 'pointer' }}
          >
            phone: +65 11.188.888
          </Typography>
          <Typography
            sx={{ lineHeight: '30px', fontSize: '14px', cursor: 'pointer' }}
          >
            email: hello@colorlib.com
          </Typography>
        </CardContent>
      </Card>

      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alineItems: 'center',
          flexDirection: 'column',
          flex: '0 1 30%',
        }}
      >
        <Typography
          sx={{
            lineHeight: '30px',
            fontSize: '16px',
            fontWeight: '900',
            textTransform: 'uppercase',
          }}
        >
          Useful link
        </Typography>
        <Typography
          sx={{ lineHeight: '30px', fontSize: '14px', cursor: 'pointer' }}
        >
          About Us
        </Typography>
        <Typography
          sx={{ lineHeight: '30px', fontSize: '14px', cursor: 'pointer' }}
        >
          About Our Shop
        </Typography>
        <Typography
          sx={{ lineHeight: '30px', fontSize: '14px', cursor: 'pointer' }}
        >
          Delivery infomation
        </Typography>
        <Typography
          sx={{ lineHeight: '30px', fontSize: '14px', cursor: 'pointer' }}
        >
          Privacy Policy
        </Typography>
        <Typography
          sx={{ lineHeight: '30px', fontSize: '14px', cursor: 'pointer' }}
        >
          Our Sitemap
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alineItems: 'center',
          flexDirection: 'column',
          lineHeight: '30px',
          flex: '0 1 30%',
        }}
      >
        <Link href="#" underline="hover" color="inherit">
          HOME
        </Link>
        <Link href="#" underline="hover" color="inherit">
          PRODUCT
        </Link>
        <Link href="#" underline="hover" color="inherit">
          CONTACT
        </Link>
        <Link href="#" underline="hover" color="inherit">
          STORES
        </Link>
      </CardContent>
    </Container>
  )
}

export default FooterLeft
