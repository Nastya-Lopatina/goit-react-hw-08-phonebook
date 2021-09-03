import { useSelector } from "react-redux";
import{authSelectors} from '../redux/Auth';
import Navigation from '';
import UserMenu from '';
import AuthNav from '';

export default function AppBar(){
    const isLoggedIn = useSelector(authSelectors) 

    return(
        <header>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}