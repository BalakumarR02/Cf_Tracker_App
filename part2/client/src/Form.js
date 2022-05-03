import { React, useState } from 'react'
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
    const [values, setValues] = useState({ name: "", city: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/create', values)
            .then(function (response) {
                console.log(response);
                navigate('/');
                setValues({ name: "", city: "", age: "", phone: "" })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='form'>
            <h1 className='title'>Details Form</h1>

            <form className='form-data' onSubmit={handleSubmit}>
                <label htmlFor="name" className='label mt-3'>Name :  </label>
                <input type="text" name="name" placeholder='Name' value={values.name} onChange={(e) => { setValues({ ...values, name: e.target.value }) }} required />
                <label htmlFor="age" className='label mt-3'>Age: </label>
                <input type="number" name="age" placeholder='Age' value={values.age} onChange={(e) => { setValues({ ...values, age: e.target.value }) }} />

                <label htmlFor="city" className='label mt-3'>City:  </label>
                <input type="text" name="city" placeholder='City' value={values.city} onChange={(e) => { setValues({ ...values, city: e.target.value }) }} />

                <label htmlFor="phone" className='label phone mt-3'>Phone Number: </label>
                <input type="number" name="phone" placeholder='Phone' value={values.phone} onChange={(e) => { setValues({ ...values, phone: e.target.value }) }} pattern={"[789][0-9]{9}"} required />
                <button className='btn btn-primary submit'>Submit</button>


            </form>
        </div>
    )
}

export default Form