import { TextField } from "@mui/material";
import React, { useState } from "react";

// Import component


//Firebase

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebaseConfig";

//Yup
import * as yup from "yup";

//Formik
import { Formik } from "formik";

// Import Styles

import "./confirmShop.css";
import { green } from "@mui/material/colors";



const ConfirmShop = () => {

   const [purchaseID, setPurchaseID]  = useState("");

const yupSchema = yup.object({
  name: yup.string().min(2, "Valor minimo dos caracteres").max(20).required(""),
  lastName: yup
    .string()
    .min(2, "Valor minimo dos caracteres")
    .max(20)
    .required(""),
  email: yup.string().email("ejemplo@ejemplo.com").required(""),
});

const submitHandler = async (values, resetForm) => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "purchase"), {
    values
  });
  console.log("Document written with ID: ", docRef.id);

  setPurchaseID(docRef.id);

  console.log(values);
  resetForm();
};

const initialValues = {
  name: "",
  lastName: "",
  email: "",
}; 
   
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
      validationSchema={yupSchema}
    >
      {({ values, errors, handleChange, handleSubmit, isValid, dirty }) => (
        <form className="formStyle" onSubmit={handleSubmit}>
          <TextField
            className="textFieldStyle"
            fullWidth
            placeholder="Nombre"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: "red" }}> {errors.name} </span>}

          <TextField
            className="textFieldStyle"
            fullWidth
            placeholder="Apellido"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />

          {errors.lastName && (
            <span style={{ color: "red" }}> {errors.lastName} </span>
          )}

          <TextField
            className="textFieldStyle"
            fullWidth
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span style={{ color: "red" }}> {errors.email} </span>
          )}

          <button
            className="buttonForm"
            type="submit"
            disabled={!(isValid && dirty)}
          >
            Confirmar
          </button>
            {purchaseID.length ? <p style={{color:'green', paddingTop:'10px'}}>Gracias por su compra, su número de tiket es: {purchaseID}</p> : null}
          
        </form>

      )}
    </Formik>
  );
};

export default ConfirmShop;
