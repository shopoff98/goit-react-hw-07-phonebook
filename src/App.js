import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { Container } from "./components/styled/Container.styled";
import {
  useGetContactsQuery,
  useAddContactMutation,
} from "./redux/contacts/contacts-reducer";

export default function App() {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  function formSubmit({ name, phone }) {
    if (data.find((item) => item.name === name)) {
      toast.error(`${name} is already in contacts!`);
      return;
    } else {
      const contact = {
        name,
        phone,
      };
      addContact(contact);
      toast.success("Contact added");
    }
  }

  return (
    <Container>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter contacts={data} />
      {data && <ContactList contacts={data} />}
      {/* <ContactList
        contacts={data}
        // onDeleteContact={onDeleteContact}
      /> */}
    </Container>
  );
}
