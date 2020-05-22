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

}


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

//changes validation



  return (<></>);






}

