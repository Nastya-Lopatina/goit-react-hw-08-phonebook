import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import style from '../styles/ContactList.module.css';
import { deleteContacts, fetchContacts } from '../redux/Contacts/contact-operations';
import {getVisibleContacts} from '../redux/Contacts/contact-selectors';
import Button from '@material-ui/core/Button';

const ContactList = () => {
   const contacts = useSelector(getVisibleContacts)
   const dispatch = useDispatch();
   const onDeleteContact = id => dispatch(deleteContacts(id));
   
   useEffect(() => {dispatch(fetchContacts())}, [dispatch]);
 
   return(
       <ul className={style.list}>
        {contacts.map(({ name, number, id }) => (
            <li className={style.li}>
                <p key={id} className={style.list_name} >
                 {name} : {number}
                </p>
                
                 <Button
                className={style.list_btn}
                     variant="contained"
                     color="secondary"
                     size="small" 
                    type='button'
                    name='delete'
                    onClick={() => onDeleteContact(id)}>
                    Удалить
                </Button>
                

            </li>

        ))}

    </ul>
   ) 
}


export default ContactList;
