import ContactForm from '../components/ContactForm/ СontactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList';

const contactsView = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default contactsView;