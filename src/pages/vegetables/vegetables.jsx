import React from 'react'
import { useLocation,useNavigate } from 'react-router';
import { useSelector} from 'react-redux';
import RenderProducts from 'Components/RenderProducts/RenderProducts';

const Vegetables = () => {

  const navigate = useNavigate();
  const {vegetables} = useSelector((state) => state.orderCreator)
  const { searchValue } = useSelector((state) => state.sort);

  const sortType = useSelector((state) => state.sort.sort);


  const link = '/vegetables';

  const toItem = (id) => {
    navigate(`${link}/${id}`);
  };
  const location = useLocation();
  const pageName = location.pathname.substring(1)[0].toUpperCase() +location.pathname.substring(1).slice(1)

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');
  const search = searchValue ? `&search=${searchValue}` : '';

  const newArr = `https://63374daf132b46ee0be02302.mockapi.io/nuts?sortBy=${sortBy}&order=${order}${search}`;


    return (

             <div>
              <RenderProducts array={vegetables} pageName={pageName} newArr={newArr}  toItem={toItem} />
            </div>

    );
};

export default Vegetables;