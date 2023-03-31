import React from 'react';
import styles from './shopping.module.scss'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton } from '@mui/material';
import { green,yellow, red } from '@mui/material/colors';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TableCart from '../Table/TableCart';
import { addedGoodInCart} from '../../slice/orderCreatorSlice';
import { useDispatch, useSelector } from "react-redux";



const RenderRow = ({name, count,total, index}) => {

  const dispatch = useDispatch()

    return (

      <tr >
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>$ {total}</td>
        <td>
          <IconButton className={styles.iconButton}>
            <DeleteForeverIcon  sx={{color: red[500]}}/>
          </IconButton>
          <IconButton className={styles.iconButton}
           >
            <AddBoxIcon  sx={{color: green[500]}} onClick={() => dispatch(addedGoodInCart())} />
          </IconButton>
          <IconButton className={styles.iconButton}
          >
            <IndeterminateCheckBoxIcon sx={{color: yellow[900]}}/>
          </IconButton>
        </td>
      </tr>


    )
  }

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.orderCreator.cartItems);
  const total = useSelector((state) => state.orderCreator.totalPrice);

  const dispatch = useDispatch();
    return (
      <>
  {  total ? <>
    <TableCart />

<div className={styles.total}>
  Total: $ {total}

</div></>
: <div style = {{display: 'flex',
justifyContent: 'center',
alignItems: 'center',
fontSize: '30px',
fontWeight: '900'}}>Cart is empty</div> }

    </>
    );
};



export default  ShoppingCart;