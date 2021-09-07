import axios from "axios";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


export const getContact = async () => {
   return await axios.get('/contacts');
  
  
  };
  
  export const addContact = async contact => {
    const{data} = await axios.post('/contacts', contact);
    return data;
  };
