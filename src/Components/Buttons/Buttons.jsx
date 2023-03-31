import React from 'react';
import {Typography, Button } from '@mui/material'
import {changeCountGood} from '../../actions'
import { addedGoodInCart} from '../../slice/orderCreatorSlice';
import {useSelector, useDispatch} from 'react-redux';

const Buttons = ({id, count, setCount }) => {

  const countGood = useSelector((state) => state.orderCreator.countGood);
  const dispatch = useDispatch();
  const beverages = useSelector((state) => state.orderCreator.beverages)



    const counterAdd = () => {
        setCount(count + 1);
      }

      const counterSubtract = () => {
        setCount(count > 1 ? count - 1 : 1);
      }

      const addGood = () => {
        dispatch(addedGoodInCart({ id,count}))
        setCount(1)
      }

    return (
      <div style={{display: 'flex',
      justifyContent:'space-between'}}>
        <div style={{ display: 'flex',
                justifyContent:'space-between',
                width:100}}>
            <Button variant='contained'
                sx={{background: 'black',
                minWidth: 30,
                height: 25,
                ':hover':{background: '#7FAD39'},
                padding: 0,
                }}
                onClick={counterSubtract }>
                 - </Button>
                <Typography>{count}</Typography>
                <Button
                variant='contained'
                sx={{background: 'black',
                minWidth: 30,
                height: 25,
                ':hover':{background: '#7FAD39'},
                padding: 0
                }}
                onClick={() => counterAdd()}
                // onClick={changeCountGood}
                >+</Button>
        </div>
        <Button variant='contained'
        sx={{background: '#7FAD39',
        ':hover':{background: 'black'},
        height: 25,
        padding: 0
        }}
        onClick={() => addGood()}
        >add</Button>
      </div>

    );
};



export default
(Buttons);