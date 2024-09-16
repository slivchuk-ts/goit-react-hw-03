
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
   return (
        <li className={s.item}>
            <p className={s.contact}>
                <span className={s.name}>
                    <FaUser className={s.icon} />
                    {name}
                </span> 
                <span className={s.number}><FaPhoneAlt className={s.icon} />{number}</span>
            </p>
            <button onClick={onDelete} className={s.button}>
                Delete
            </button>
        </li>
    );
};
export default Contact;

