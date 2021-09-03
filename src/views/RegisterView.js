import {useState } from "react";
import { useDispatch } from "react-redux";
import {authOperations} from '../redux/Auth';

export default function RegisterView(){
    const dispatch = useDispatch();
    const[name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name,value} = e.target;

        switch (name) {
            case 'name': setName(value);
                break;

            case 'email': setEmail(value);
                break;

            case 'password': setPassword(value);
                break;    

            default: return;
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(authOperations.register({name,email,password}));
        setName('');
        setEmail('');
        setPassword('');
    }

    return(
         <form onSubmit={handleSubmit} autoComplete = 'off'>
             <label>
                 Name
                 <input 
                 type = 'text' 
                 name = 'name'
                 value = {name}
                 onChange = {handleChange}/>   
             </label>

             <label>
                 Email
                 <input 
                 type = 'text' 
                 name = 'email'
                 value = {email}
                 onChange = {handleChange}/>   
             </label>

             <label>
                 Password
                 <input 
                 type = 'text' 
                 name = 'password'
                 value = {password}
                 onChange = {handleChange}/>   
             </label>

         </form>
    )
}