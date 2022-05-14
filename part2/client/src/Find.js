import { React, useState, useEffect } from 'react'
import Axios from "axios";

function Find() {
    const [name, setName] = useState("");
    const [data, setData] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault();
        Axios.get(`http://localhost:3001/search`, {
            params: {
                name: name
            }
        })
            .then(function (response) {
                console.log(response.data);  
                setData(response.data);
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='container'>
            <div className='find'>
                <h1 className='title'>Search by Name</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className='label mt-3'>Name :  </label>
                    <input type="text" name="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                {(data.length === 0) && <p className="alert">No Records Found</p>   }
                    <div className='subtn'>
                        <button className='btn btn-primary w-50 submit'>Submit</button>
                    </div>


                </form>
            </div>

            <div className='disp-container'>
                <div className="row">
                    {(Object.keys(data).length !== 0) && data.map((dat) => (
                        <div className='card col-lg-6 col-12'>
                            <h3 className='disp-data'><span className='disp-label me-4'>Name: </span> {dat.name}</h3>
                            <h3 className='disp-data'><span className='disp-label me-5'>Age: </span>{dat.age}</h3>
                            <h3 className='disp-data'><span className='disp-label me-5'>City: </span>{dat.city}</h3>
                            <h3 className='disp-data'><span className='disp-label'>Phone No: </span>{dat.phone}</h3>
                        </div>
                    ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Find