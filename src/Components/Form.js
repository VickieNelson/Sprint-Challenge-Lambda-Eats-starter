import React, { useState, useEffect } from "react";

import * as you from "yup";
import axios from "axios";

//function
export default function Form() {

    const initialState = {}
        name: '',
        size: '',
        sauce: '',
        toppings: '',
        instructions: '',

};


//pizza and post form useState
const [pizzaForm, setPizzaForm] = useState(initialState);
const [post, setPost] = usestate([]);

//errors useState
const [serverError, setServerError] = useState('');
const [errors, setErrors] = useState(initialState);

// **yup form schema setup

const formSchema = yup.object().shape({

    name: yup.string().required('Please enter your name').min(2),
    size: yup.string().required('Select size'),
    sauce: yup.string().required(),
    instructions: yup.string()
})

// validation for changes

const validateChange = event =>{

    yup

    .reach //a,b 2 arguments: the schema and the target
        (formSchema, event.target.name)
    .validate //the target and value
        (event.target.value)
    .then //function?
    (valid =>{
        setErrors({...errors, [event.target.name]: ''});
    })
    .catch //function?
    (err => {
        setErrors({...errors, [event.target.name]: errors.errors[0]});
});
}

//change handler
const handleChange = event =>{
    event.persist();
    const newPizzaForm = {
        ...pizzaForm, [event.target.name] :
        event.target.type === 'checkbox' ? event.target.checked:
        event.target.type === 'radio' ?event.target.checked:
        event.target.value
    };
    validateChange(event);
    setPizzaForm(newPizzaForm);
}

  return (<></>);






}

