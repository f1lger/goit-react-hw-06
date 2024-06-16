import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import style from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(23, "Too long"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(23, "Too long"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (value, actions) => {
    dispatch(addContact(value));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={style.form}>
          <label className={style.formItem}>
            <p>Name</p>
            <Field name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={style.formItem}>
            <p>Number</p>
            <Field name="number" />
            <ErrorMessage name="number" component="span" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
