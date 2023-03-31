import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { IconButton } from '@mui/material'
import { green, yellow, red } from '@mui/material/colors'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useDispatch, useSelector } from "react-redux";
import { addGoodInCart, removeGoodInCart, deleteGood} from '../../slice/orderCreatorSlice';


const TableRows = ({
  id,
  name,
  count,
  total,
  index,
  price
}) => {

  const dispatch = useDispatch()

  return (
    <>
      <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 }
      }}
      >
        <TableCell component="th" scope="row"
        sx={{minWidth:'10px'}}
        >
          {index + 1}
        </TableCell>
        <TableCell align="right" >{name}</TableCell>
        <TableCell align="right" >{count}</TableCell>
        <TableCell align="right" >{price}$</TableCell>
        <TableCell align="right" >{total}$</TableCell>
        <TableCell align="right" >


          <IconButton
          onClick={() => dispatch(removeGoodInCart({id,count}))}
          >
            <IndeterminateCheckBoxIcon sx={{ color: yellow[900] }} />
          </IconButton>
          <IconButton
          onClick={() => dispatch(addGoodInCart({id,count}))}
          >
            <AddBoxIcon sx={{ color: green[500] }} />
          </IconButton>
          <IconButton  onClick={() => dispatch(deleteGood({id}))}>
            <DeleteForeverIcon sx={{ color: red[500] }} />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  )
}

const TableCart = () => {
  const cartItems = useSelector((state) => state.orderCreator.cartItems);
  const dispatch = useDispatch();

  // const arr = JSON.parse(localStorage.getItem('result'));


  return (
    <TableContainer component={Paper} >
      <Table  size="small"
       aria-label="a dense table"

      >
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  >
          {cartItems.map((item, index) => {
            return (
              <TableRows
                {...item}
                key={item.id}
                index={index}
              />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

//

export default (TableCart)
