import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/Auth';

export default function Navigation (){
    const isLoggedIn = useSelector(authSelectors)

    return(
        <nav>
            <NavLink to ='/'>
              Home
            </NavLink>
            { isLoggedIn &&(
               <NavLink to = '/contact' exact>
                 Contacts
               </NavLink>
            )}
        </nav>
    )
}