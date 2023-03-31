import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSelector} from 'react-redux';
import RenderProducts from 'Components/RenderProducts/RenderProducts';




const Beverage = () => {

  const navigate = useNavigate();
  const { beverages} = useSelector((state) => state.orderCreator);
  const { searchValue } = useSelector((state) => state.sort);

  const sortType = useSelector((state) => state.sort.sort);

  const toItem = (id) => {
    navigate(`/beverages/${id}`);
  };

  const location = useLocation();
  const pageName = location.pathname.substring(1)[0].toUpperCase() +location.pathname.substring(1).slice(1)

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

    // const newArr = `https://63374daf132b46ee0be02302.mockapi.io/fruits?sortBy=${sortBy}&order=${order}${search}`;
    const newArr = `https://63374daf132b46ee0be02302.mockapi.io/fruits?sortBy=${sortBy}&order=${order}`;


  return ((
      <div>
        <RenderProducts array={beverages} pageName={pageName}  newArr={newArr}  toItem={toItem} />
      </div>
    )
  )
};

export default Beverage