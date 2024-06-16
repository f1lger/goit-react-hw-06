import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import style from "./ContactList.module.css";
import { selectName } from "../../redux/filtersSlice";

export default function ContactList() {
  const searchFilter = useSelector(selectName);
  // console.log(selectName());
  const contacts = useSelector((state) => state.contacts.items);
  console.log(contacts);
  const filtredContacts = [
    ...contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchFilter.toLowerCase().trim())
    ),
  ];
  return (
    <>
      <ul className={style.contactList}>
        {filtredContacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
}
