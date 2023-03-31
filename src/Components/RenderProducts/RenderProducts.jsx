import React, { useEffect,useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Cards from '../_common/Cards/Cards';
import { useNavigate } from 'react-router';
import SceletonCard from '../_common/Cards/sceletonCard';
import Sort, { menuListVisible } from '../Sort/Sort';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGoods } from '../../slice/orderCreatorSlice';
import { selectFilters } from '../../slice/sortSlice';
import qs from 'qs';


const RenderProducts = ({array,pageName, newArr, toItem }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.orderCreator);
  const { searchValue } = useSelector((state) => state.sort);

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const sortType = useSelector((state) => state.sort.sort);

  const [copyArray, setCopyFinalArray] = useState(array);

  React.useEffect(() => {
    setCopyFinalArray(array)

  },[array,copyArray, searchValue])

  const finalArray = copyArray.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));


  const getProduct = async () => {

    dispatch(

      fetchGoods( {newArr}))

    window.scrollTo(0, 0);
  }

  // Если изменили URL параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
      });

      navigate(`?${queryString}`)
    }
    window.scrollTo(0, 0);
    isMounted.current = true;
  }, [sortType, searchValue]);

  // Если был первый рендер, то проверяем URL параметры и сохраняем их
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = menuListVisible.find((obj) => obj.sortProperty === params.sortProperty)
      dispatch(
        selectFilters({
          ...params,
          sort,
        }),
      )
      isSearch.current = true;
    }
  }, [])

  useEffect(() => {
    getProduct()
    window.scrollTo(0, 0);
  }, [sortType]);



  return (
    (
      <div
      >
        <Container sx={{ pb: 2 }}>
          <Sort />
          <Typography variant="h2" component="h6" sx={{ textAlign: 'center' }}>
            {status === 'loading' ? 'Loading...' : status === 'error' ? 'Something went wrong' : finalArray.length === 0 ? 'Nothing found' : `${pageName}`}
          </Typography>
        </Container>
        <Grid container spacing={2}>
          {status === 'loading' ? [...new Array(6)].map((item, i) => <SceletonCard key={i} />)
            : finalArray.map((item) => <Cards item={item} key={item.id} toItem={toItem}
            />
            )}
        </Grid>
      </div>
    )
  )
}

export default RenderProducts;