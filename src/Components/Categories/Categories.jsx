import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './categories.module.scss'

const Categories = ({value, onChangeSort }) => {

    const [isVisible,setIsVisible] = React.useState(false);
    const menuListVisible = [{name:'popularity (DESC)' , sortProperty: 'rating'},
    {name:'popularity (ASC)' , sortProperty: '-rating'},
    {name:'price (DESC)', sortProperty: 'price'},
    {name:'price (ASC)', sortProperty: '-price'},
    {name:'alphabet (DESC)', sortProperty: 'title'},
    {name:'alphabet (ASC)', sortProperty: '-title'}];



      const onSelected = (i) => {
        onChangeSort(i);
        setIsVisible(false);
      }

    return (
        <div className={styles.selectNav}>
            <div className={styles.sort__label}
             >
            <MenuIcon onClick={() => setIsVisible(!isVisible) } />
          <b onClick={() => setIsVisible(!isVisible) }>Select Categories:</b>
          <span className={styles.active} onClick={() => setIsVisible(!isVisible) }>{value.name}</span>
        </div>
       { isVisible && (
         <div className={styles.sort__popup}>
         <ul >
          {menuListVisible.map((obj,i)=> <li  key={i}
          onClick={() => onSelected(obj)}
          className={value.sortProperty === obj.sortProperty   ? 'active' : ''}
          >
            {obj.name}
            </li>)}
         </ul>
       </div>
       )}
            </div>
    );
};

export default Categories;