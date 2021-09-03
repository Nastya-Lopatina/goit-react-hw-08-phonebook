import { NavLink } from 'react-router-dom';

export default function AuthNav (){
    <div>
        <NavLink 
        to = '/register'
        exact>
           Sign up
        </NavLink>

        <NavLink
        to = '/login'
        exact>
           Log in
        </NavLink>


    </div>
}