import { Formik,Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import s from './ContactForm.module.css'


const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: '', number: '' };

const validationSchema = Yup.object({
    name: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("This field is required"),
  number: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
    .min(3, 'Minimum 3 digits')
    .max(50, 'Maximum 50 digits')
    .required("This field is required"),
});

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor="name">Name</label>
        <Field className={s.input} id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" className={s.error} />

        <label className={s.label} htmlFor="number">Number</label>
        <Field className={s.input} id="number" name="number" type="text" />
        <ErrorMessage name="number" component="div" className={s.error} />

        <button type="submit" className={s.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;