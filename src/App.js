import ContactForm from './components/ СontactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';


export default function App() {


return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
   
      <Filter/>
    

      <ContactList
        />
    
  </div>
);
};


