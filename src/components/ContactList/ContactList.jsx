import s from './ContactList.module.css'
import Contact from '../Contact/Contact'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
        <div className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDelete={() => onDeleteContact(id)}
                />
            ))}
        </div>
    );
};
export default ContactList;