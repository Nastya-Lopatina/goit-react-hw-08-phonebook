import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../redux/Auth';


export default function UserMenu(){
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return(
        <div>
            <span>Добро пожаловать, {name}</span>
            <button
                 color="secondary"
                 variant="outlined"
                 type="button"
                 onClick={() => dispatch(authOperations.logOut())}>
                  Log out
             </button>
        </div>
    )
}