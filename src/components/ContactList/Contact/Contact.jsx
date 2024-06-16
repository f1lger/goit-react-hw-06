import { FaUser, FaPhoneAlt } from "react-icons/fa";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";

export default function Contact({ name, number }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(name));
  return (
    <li className={style.contactItem}>
      <div className={style.contactInfoCont}>
        <p className={style.contactInfo}>
          <FaUser />
          {name}
        </p>
        <p className={style.contactInfo}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button onClick={handleDeleteContact}>Delete</button>
    </li>
  );
}
