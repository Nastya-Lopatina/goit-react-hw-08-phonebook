import { useSelector, useDispatch } from 'react-redux';
import {changeFilter} from '../../redux/Contacts/contact-actions';
import {getFilter} from '../../redux/Contacts/contact-selectors';
import style from './Filter.module.css'

const Filter = () => {

const value = useSelector(getFilter);
const dispatch = useDispatch();
const onChange = (e) => dispatch(changeFilter(e.target.value));

    
return(
  
        <div className={style.label}>
          <span className={style.span}> Поиск контактов по имени</span>
           <input
           className={style.input}
           type = 'text'
           value ={value}
           onChange = {onChange}/>
        </div>
    )
}


export default Filter;