import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const Form = () => {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   topping: "",
  //   instructions: "",
  // });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    toppings: "",
    instructions: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState("");

  const [post, setPost] = useState([]);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Please enter name")
      .min(2, "Name must be longer than 2 characters"),
    size: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.string(),
  });
  const [formState, setFormState] = useState({
    name: "",
    size: "Medium",
    pepperoni: false,
    sausage: false,
    onions: false,
    pineapple: false,
    instructions: "",
    amount: 0,
  });

  useEffect(() => {
    console.log("form state change");
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data);
        console.log("success", post);
        setFormState({
          name: "",
          email: "",
          password: "",
          terms: "",
          role: "",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className='pizzaForm'>
      <div className='form-heading'>
        <h2>Lambda Eats</h2>
        <h3>Create your pizza style!</h3>
      </div>

      <form className='form' onSubmit={formSubmit}>
        {/* //name */}
        <label htmlFor='name'>
          Name
          <input
            className='input'
            type='text'
            id='name'
            name='name'
            onChange={inputChange}
            value={formState.name}
          />
          {errors.name.length > 0 ? (
            <p className='error'>{errors.name}</p>
          ) : null}
        </label>

        {/* //email */}
        <label htmlFor='email'>
          Email
          <input
            className='input'
            type='email'
            id='email'
            name='email'
            onChange={inputChange}
            value={formState.email}
          />
          {errors.email.length > 0 ? (
            <p className='error'>{errors.email}</p>
          ) : null}
        </label>

        {/* //size */}
        <label htmlFor='size'>
          Size
          <select id='size' name='size' onChange={inputChange}>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='larg'>Large</option>
          </select>
        </label>

        {/* //toppings */}
        <label htmlFor='toppings' className='toppings-group'>
          <h2>Toppings</h2>
        </label>

        <div className='toppings'>
          <label htmlFor='pepperoni'>
            <input
              type='checkbox'
              id='pepperoni'
              name='pepperoni'
              checked={formState.pepperoni}
              onChange={inputChange}
            />
            Pepperoni
          </label>

          <label htmlFor='sausage'>
            <input
              type='checkbox'
              id='sausage'
              name='sausage'
              checked={formState.sausage}
              onChange={inputChange}
            />
            Sausage
          </label>

          <label htmlFor='onions'>
            <input
              type='checkbox'
              id='onions'
              name='onions'
              checked={formState.onions}
              onChange={inputChange}
            />
            Onions
          </label>

          <label htmlFor='pineapple'>
            <input
              type='checkbox'
              id='pineapple'
              name='pineapple'
              checked={formState.pineapple}
              onChange={inputChange}
            />
            Pineapple
          </label>
        </div>
        <label htmlFor='instructions'>
          Special Instructions
          <textarea
            id='instructions'
            name='instructions'
            onChange={inputChange}
          />
        </label>

        <button className='button' disabled={buttonDisabled} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

/*PREVIOUS CODE ATTEMPTS*/
// import React, { useState } from "react";
// import * as yup from "yup";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// // import Header from "./Components/Header";

// export default function Form(props) {
//   const history = useHistory();

//   const formSchema = yup.object().shape({
//     name: yup
//       .string()
//       .required("Please enter name")
//       .min(2, "Name must be longer than 2 characters"),
//     size: yup.string(),
//     pepperoni: yup.boolean(),
//     sausage: yup.boolean(),
//     onions: yup.boolean(),
//     pineapple: yup.boolean(),
//     instructions: yup.string(),
//   });
//   const [formState, setFormState] = useState({
//     name: "",
//     size: "Medium",
//     pepperoni: false,
//     sausage: false,
//     onions: false,
//     pineapple: false,
//     instructions: "",
//     amount: 0,
//   });

//   const [errorState, setErrorState] = useState({
//     name: "",
//     size: "",
//     sauce: "",
//   });

//   const [buttonDisabled, setButtonDisabled] = useState("");

//   //validate change
//   const validate = (e) => {
//     yup
//       .reach(formSchema, e.target.name)
//       .validate(e.target.value)
//       .then((valid) => {
//         setErrorState({
//           ...errorState,
//           [e.target.name]: "",
//         });
//       })
//       .catch((err) => {
//         setErrorState({
//           ...errorState,
//           [e.target.name]: err.errors[0],
//         });
//       });
//   };
//   const inputChange = (e) => {
//     e.persist();
//     const newFormData = {
//       ...formState,
//       [e.target.name]:
//         e.target.type === "checkbox" ? e.target.checked : e.target.value,
//     };
//     validateChange(e);
//     setFormState(newFormData);
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();
//     console.log("form submitted!");
//     axios
//       .post("https://reqres.in/api/users", formState)
//       .then((res) => {
//         props.setOrder([...props.order, res.data]);
//         console.log(res.data);
//         history.push("/order");
//       })
//       .catch((err) => console.log(err));
//   };

//   const [total, setTotal] = useState(0);

//   const addTotal = (x) => {
//     setTotal(total + x);
//   };

//   const inputChange = (e) => {
//     e.persist();
//     validate(e);
//     let value =
//       e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setFormState({ ...formState, [e.target.name]: value });
//     console.log(formState[e.target.name]);
//   };

//   return (
//     <form onSubmit={formSubmit} className='pizzaForm'>
//       <section className='form-heading'>
//         <h2 className='form-headline'> Lambda Eats</h2>
//         <h3 className='form-subtitle'> Your pizza, your way</h3>
//       </section>
//       <label htmlFor='name'>
//         Name
//         <input
//           type='text'
//           name='name'
//           id='name'
//           value={formState.name}
//           onChange={inputChange}
//         />
//       </label>

//       {errorState.name.length > 2 ? (
//         <p className='error'>{errorState.name}</p>
//       ) : null}

//       <label htmlFor='size'>
//         Choice of Size
//         <select
//           name='size'
//           id='size'
//           value={formState.size}
//           onChange={inputChange}
//         >
//           <option value='Small'>Small</option>
//           <option value='Medium'>Medium</option>
//           <option value='Large'>Large</option>
//         </select>
//       </label>

//       <div className toppings>
//         <label htmlFor='pepperoni'>
//           <input
//             type='checkbox'
//             id='pepperoni'
//             name='pepperoni'
//             checked={formState.pepperoni}
//             onChange={inputChange}
//           />
//           Pepperoni
//         </label>

//         <label htmlFor='sausage'>
//           <input
//             type='checkbox'
//             id='sausage'
//             name='sausage'
//             checked={formState.sausage}
//             onChange={inputChange}
//           />
//           Sausage
//         </label>

//         <label htmlFor='onions'>
//           <input
//             type='checkbox'
//             id='onions'
//             name='onions'
//             checked={formState.onions}
//             onChange={inputChange}
//           />
//           Onions
//         </label>

//         <label htmlFor='pineapple'>
//           <input
//             type='checkbox'
//             id='pineapple'
//             name='pineapple'
//             checked={formState.pineapple}
//             onChange={inputChange}
//           />
//           Pineapple
//         </label>
//       </div>
//       <label htmlFor='instructions'>
//         Special Instructions
//         <textarea
//           id='instructions'
//           name='instructions'
//           onChange={inputChange}
//         />
//       </label>

//       <button type='submit'>Submit</button>
//     </form>
//   );
// }

// /* PREVIOUS CODE THAT WASNT WORKING */
// // export default function Form() {
// //   const initialState = {
// //     name: "",
// //     size: "",
// //     sauce: "",
// //     toppings: "",
// //     instructions: "",
// //   };

// //   const [pizzaForm, setPizzaForm] = useState(initialState);
// //   const [post, setPost] = useState([]);
// //   const [serverError, setServerError] = useState("");
// //   const [errors, setErrors] = useState(initialState);

// //   const formSchema = yup.object().shape({
// //     name: yup.string().required("Please enter a name").min(2),
// //     size: yup.string().required("Please select a size"),
// //     sauce: yup.string().required(),
// //     toppings: yup.string().required(),
// //     instructions: yup.string(),
// //   });

// //   const validateChange = (e) => {
// //     yup
// //       .reach(formSchema, e.target.name)
// //       .validate(e.target.value)
// //       .then((valid) => {
// //         setErrors({ ...errors, [e.target.name]: "" });
// //       })
// //       .catch((err) => {
// //         setErrors({ ...errors, [e.target.name]: err.errors[0] });
// //       });
// //   };

// //   const handleChange = (e) => {
// //     e.persist();
// //     const newPizzaForm = {
// //       ...pizzaForm,
// //       [e.target.name]:
// //         e.target.type === "checkbox"
// //           ? e.target.checked
// //           : e.target.type === "radio"
// //           ? e.target.checked
// //           : e.target.value,
// //     };
// //     validateChange(e);
// //     setPizzaForm(newPizzaForm);
// //   };

// //   const onSumbit = (e) => {
// //     e.preventDefault();

// //     axios
// //       .post("https://reqres.in/api/unknown", pizzaForm)
// //       .then((res) => {
// //         setPost(res.data);

// //         setPizzaForm(initialState);
// //         setServerError(null);
// //       })
// //       .catch((err) => {
// //         setServerError(alert("There was a server error"));
// //       });
// //   };

// //   return (
// //     <form onSubmit={onSumbit}>
// //       {serverError ? <p className='error'>{serverError}</p> : null}
// //       <label htmlFor='name' className='name'>
// //         Name:
// //         <input
// //           id='name'
// //           type='text'
// //           minLength='2'
// //           name='name'
// //           onChange={handleChange}
// //           value={pizzaForm.name}
// //         />
// //         {errors.name.length > 0 ? (
// //           <p className='errors'>{errors.name}</p>
// //         ) : null}
// //       </label>

// //       <label htmlFor='size'>
// //         <p className='size'>Choice of Size</p>
// //         <select id='size' name='size' onChange={handleChange}>
// //           <option value=''>--Please choose a size--</option>
// //           <option value='small'>Small</option>
// //           <option value='medium'>Medium</option>
// //           <option value='large'>Large</option>
// //           <option value='extralarge'>Extra Large</option>
// //         </select>
// //         {errors.name.length > 0 ? (
// //           <p className='errors'>{errors.size}</p>
// //         ) : null}
// //       </label>

// //       <div className='sauce'>Choice of Sauce </div>
// //       <label htmlFor='sauce'>
// //         <input
// //           id='sauce'
// //           type='radio'
// //           name='sauce'
// //           onChange={handleChange}
// //           checked={pizzaForm.sauce}
// //           value='Original Marinara'
// //         />
// //         Original Marinara
// //       </label>
// //       <label htmlFor='sauce'>
// //         <input
// //           id='sauce'
// //           type='radio'
// //           name='sauce'
// //           onChange={handleChange}
// //           checked={pizzaForm.sauce}
// //           value='Garlic Ranch'
// //         />
// //         Garlic Ranch
// //       </label>
// //       <label htmlFor='sauce'>
// //         <input
// //           id='sauce'
// //           type='radio'
// //           name='sauce'
// //           onChange={handleChange}
// //           checked={pizzaForm.sauce}
// //           value='Alfredo Sauce'
// //         />
// //         Alfredo Sauce
// //       </label>
// //       <label htmlFor='sauce'>
// //         <input
// //           id='sauce'
// //           type='radio'
// //           name='sauce'
// //           onChange={handleChange}
// //           checked={pizzaForm.sauce}
// //           value='BBQ Sauce'
// //         />
// //         BBQ Sauce
// //       </label>

// //       {errors.name.length > 0 ? <p className='errors'>{errors.sauce}</p> : null}

// //       <div className='toppings'>Add Toppings</div>

// //       <label htmlFor='toppings'>
// //         <input
// //           type='checkbox'
// //           name='toppings'
// //           onChange={handleChange}
// //           checked={pizzaForm.toppings}
// //           value='Pepperoni'
// //         />
// //         Pepperoni
// //       </label>

// //       <label htmlFor='toppings'>
// //         <input
// //           type='checkbox'
// //           name='toppings'
// //           onChange={handleChange}
// //           checked={pizzaForm.toppings}
// //           value='Sausage'
// //         />
// //         Sausage
// //       </label>

// //       <label htmlFor='toppings'>
// //         <input
// //           type='checkbox'
// //           name='toppings'
// //           onChange={handleChange}
// //           checked={pizzaForm.toppings}
// //           value='Bacon'
// //         />
// //         Bacon
// //       </label>

// //       <label htmlFor='toppings'>
// //         <input
// //           type='checkbox'
// //           name='toppings'
// //           onChange={handleChange}
// //           checked={pizzaForm.toppings}
// //           value='Olives'
// //         />
// //         Olives
// //       </label>

// //       <label htmlFor='instructions'>
// //         <p className='instructions'>Special Instructions</p>
// //         <textarea
// //           id='instructions'
// //           name='instructions'
// //           placeholder={`Anything else you'd like to add?`}
// //           onChange={handleChange}
// //           value={pizzaForm.instructions}
// //         />
// //       </label>

// //       {errors.name.length > 0 ? (
// //         <p className='errors'>{errors.toppings}</p>
// //       ) : null}

// //       <button type='submit' className='formButton'>
// //         Add To Order
// //       </button>

// //       <pre className='pre'>{JSON.stringify(post, null, 2)}</pre>
// //     </form>
// //   );
// // }
