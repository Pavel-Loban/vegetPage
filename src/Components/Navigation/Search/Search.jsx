import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import searchSvg from '../../../assets/img/imageNavigation/search.svg';
import logo from '../../../assets/img/imageNavigation/logo.svg';
import ContactsAndInfoUser from '../ContactsAndInfoUser/ContactsAndInfoUser';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setSearchValue} from '../../../slice/sortSlice'

import styles from './search.module.scss';

const Search = () => {

  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const inputRef = React.useRef(null);

  const [choose, setChoose] = React.useState('');

  const handleChange = (event) => {
    setChoose(event.target.value);
  };


  const onClickClear = (e) => {
    setValue('');
    dispatch(setSearchValue(''));
      inputRef.current?.focus();
  }


  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    [],
  )
  const onChangeInput = (e) => {
    setValue(e.target.value);
    console.log(value)
    updateSearchValue(e.target.value);
  }

  React.useEffect(() => {

  },[value])

  return (
    <div className={styles.subNav}>
      <div className={styles.logo}>
        <Link to='/' >
          <img src={logo} alt='logo'/>
        </Link>
        <FormControl sx={{ minWidth: 114 }} size="small" >
          <InputLabel id="demo-select-small" >Choose</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={choose}
            label="Choose"
            onChange={handleChange}
          >

            <MenuItem className={styles.menuLink} value={1}>
              <Link to='/beverages' className={styles.chooseLink}>
                Beverage
              </Link>
            </MenuItem>
            <MenuItem className={styles.menuLink} value={2}>
              <Link to='/nuts' className={styles.chooseLink}>
                Nuts & Snacks
              </Link>
            </MenuItem>
            <MenuItem className={styles.menuLink} value={3}><Link to='/vegetables' className={styles.chooseLink}>Fresh Vegetables</Link></MenuItem>
            <MenuItem className={styles.menuLink} value={4}><Link to='/fruits' className={styles.chooseLink}>Fresh Fruits</Link></MenuItem>
            <MenuItem className={styles.menuLink} value={5}><Link to='/eggs&dairy' className={styles.chooseLink}>Eggs & Dairy</Link></MenuItem>
          </Select>
        </FormControl>

        <div className={styles.search}>
          <img src={searchSvg} alt='search'/>
          <input ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className={styles.inputSearch}
          placeholder='Search for products...' />
          {value && (<svg onClick={onClickClear}
            className={styles.closeIcon}
            data-name="Capa 1"
            id="Capa_1"
            viewBox="0 0 20 19.84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
          </svg>)}
        </div>
      </div>
      <ContactsAndInfoUser />
    </div>
  )
}

export default Search
