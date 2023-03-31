import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './sort.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setSort} from '../../slice/sortSlice';



export const menuListVisible = [
{ name: 'popularity (DESC)', sortProperty: 'rating' },
{ name: 'popularity (ASC)', sortProperty: '-rating' },
{ name: 'price (DESC)', sortProperty: 'price' },
{ name: 'price (ASC)', sortProperty: '-price' },
{ name: 'alphabet (DESC)', sortProperty: 'title' },
{ name: 'alphabet (ASC)', sortProperty: '-title' },];

const Sort = () => {

  const dispatch = useDispatch();
  const sort = useSelector((state) => state.sort.sort);

  const [isVisible, setIsVisible] = React.useState(false);

  const sortRef = React.useRef(null);

  const onSelected = (obj) => {
    dispatch(setSort(obj));
    setIsVisible(false);
  }

  React.useEffect(() => {
    const onClickOutsideSort = (e) => {

      if(sortRef.current && !e.path.includes(sortRef.current)){
       setIsVisible(false);
      }
    }
    document.body.addEventListener('click',onClickOutsideSort);
    return () => {
      document.body.removeEventListener('click',onClickOutsideSort);
    };
  },[])

  return (
    <div   className={styles.selectNav}>
      <div   className={styles.sort__label}
      >
        <MenuIcon onClick={() => setIsVisible(!isVisible)} />
        <b onClick={() => setIsVisible(!isVisible)}>Select sort:</b>
        <span className={styles.active} onClick={() => setIsVisible(!isVisible)}>{sort.name}</span>
      </div>
      {isVisible && (
        <div className={styles.sort__popup}>
          <ul >
            {menuListVisible.map((obj, i) => <li key={i}
              onClick={() => onSelected(obj)}
              className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
            >
              {obj.name}
            </li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;