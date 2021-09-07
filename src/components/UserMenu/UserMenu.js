import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/Auht/';
import Button from '@material-ui/core/Button';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  

  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <Button 
        variant="contained"
        color="secondary"
        size="large"
      type="button" 
      onClick={() => dispatch(authOperations.logOut())}>
      Logout
      </Button>
    </div>
  );
}