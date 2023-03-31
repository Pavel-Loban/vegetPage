import React from 'react'
import { useNavigate,useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import RenderProducts from 'Components/RenderProducts/RenderProducts';

const EggsDairy = () => {

  const navigate = useNavigate();
  const {eggs} = useSelector((state) => state.orderCreator)
  const { searchValue } = useSelector((state) => state.sort);

  const sortType = useSelector((state) => state.sort.sort);

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-','');
  const search = searchValue ? `&search=${searchValue}` : '';

  const toItem = (id) => {
    navigate(`/eggs&dairy/${id}`)
  }

  const location = useLocation();
  const pageName = location.pathname.substring(1)[0].toUpperCase() +location.pathname.substring(1).slice(1)

    // const newArr = `https://63374daf132b46ee0be02302.mockapi.io/eggs?sortBy=${sortBy}&order=${order}${search}`;
    const newArr = `https://63374daf132b46ee0be02302.mockapi.io/eggs?sortBy=${sortBy}&order=${order}`;

    return  ((
      <div>
      <RenderProducts array={eggs}  pageName={pageName} newArr={newArr}  toItem={toItem} />
    </div>
    )
    );
}

export default EggsDairy;