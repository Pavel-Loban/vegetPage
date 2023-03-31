import React from 'react'
import { useLocation,useNavigate } from 'react-router';
import { useSelector} from 'react-redux';
import RenderProducts from 'Components/RenderProducts/RenderProducts';

const Nuts = () => {

  const navigate = useNavigate();
  const { fruits, status } = useSelector((state) => state.orderCreator);
  const { searchValue } = useSelector((state) => state.sort);

  const sortType = useSelector((state) => state.sort.sort);

  const toItem = (id) => {
    navigate(`/nuts/${id}`);
  };

  const location = useLocation();
  const pageName = location.pathname.substring(1)[0].toUpperCase() +location.pathname.substring(1).slice(1)

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');
  const search = searchValue ? `&search=${searchValue}` : '';

  const newArr = `https://63374daf132b46ee0be02302.mockapi.io/eggs?sortBy=${sortBy}&order=${order}${search}`;

  return  (
    (
      <div>
        <div>
          <RenderProducts array={fruits}  pageName={pageName} newArr={newArr}  toItem={toItem} />
        </div>
      </div>
    )
  )
}



export default Nuts
