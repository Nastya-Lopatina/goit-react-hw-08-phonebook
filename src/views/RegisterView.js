import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/Auht';
import Button from '@material-ui/core/Button';
//import style from '../views/style/RegisterView.module.css'

const style = {
  form: {
    width: 320,
    margin: 'auto'
      
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registed</h1>

      <form onSubmit={handleSubmit} style={style.form} autoComplete="off">
        <label style={style.label}>
        Name
          <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={handleChange} />
        </label>

        <label style={style.label}>
        Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={style.label}>
        Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button 
           variant="contained"
           color="secondary"
           size="large"
           type="submit">Registed</Button>
      </form>
    </div>
  );
}