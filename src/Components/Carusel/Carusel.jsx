import React from 'react'
import styles from './carusel.module.scss'
import beverage from '../../assets/img/slider/beverage.jpg'
import nuts from '../../assets/img/slider/nuts.jpg'
import vegetables from '../../assets/img/slider/vegetables.jpg'
import fruits from '../../assets/img/slider/fruits.jpg'
import dairy from '../../assets/img/slider/dairy.jpg'
import { ArrowBackIos } from '@mui/icons-material'
import { ArrowForwardIos } from '@mui/icons-material'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'



const Carusel = () => {
  const [img, setImg] = React.useState(0)

  const images = [
    {
      title: 'Beverage',
      subTitle: 'Buy More & Save',
      discount: 6,
      srcImg: beverage,
      count: 1,
      link: "/beverages"
    },
    {
      title: 'Nuts & Snacks',
      subTitle: 'Buy More & Save',
      discount: 10,
      srcImg: nuts,
      count: 2,
      link: "/nuts"
    },
    {
      title: 'Fresh Vegetables',
      subTitle: 'Buy More & Save',
      discount: 6,
      srcImg: vegetables,
      count: 3,
      link: "/vegetables"
    },
    {
      title: 'Fresh Fruits',
      subTitle: 'Buy More & Save',
      discount: 25,
      srcImg: fruits,
      count: 4,
      link: "/fruits"
    },
    {
      title: 'Eggs & Dairy',
      subTitle: 'Buy More & Save',
      discount: 15,
      srcImg: dairy,
      count: 5,
      link: "/eggs&dairy"
    },
  ]

  const getCount = () => {
    console.log(img)
  }

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ backgroundImage: `url(${images[img].srcImg})` }}
      >
        {/* <div className={styles.left2}></div> */}
        <div className={styles.left} onClick={() => img > 0 && setImg(img - 1)}>
          <ArrowBackIos sx={{ fontSize: 30 }} />
        </div>
        <div className={styles.center}>
          <div className={styles.info}>
            <span>{images[img].discount}% OFF</span>
            <div>{images[img].subTitle}</div>
            <p>{images[img].title}</p>
          </div>
          <Link to={images[img].link}>
          <Button variant="contained" className={styles.button}
          onClick={getCount}>
            SHOP NOW
            </Button>
            </Link>
        </div>
        <div
          className={styles.right}
          onClick={() => img < images.length - 1 && setImg(img + 1)}
        >
          <ArrowForwardIos sx={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  )
}

export default Carusel
