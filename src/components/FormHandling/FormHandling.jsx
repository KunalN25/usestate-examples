import React from 'react'
import { useState } from 'react'
import './FormStyles.css'

// add some css here at the end
const FormHandling = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false)

    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setIsSubmitting(true)

        setTimeout(() => {
            setIsSubmitting(false);
            alert("Form submission successful")
        }, 3000);
    }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <input placeholder='Enter name' onChange={(e) => {setName(e.target.value)}} 
                    value={name} required className='form-input' />        
            <br/>
            <input  className='form-input' type='email' placeholder='Enter email' value={email}
                     onChange={(e) => {setEmail(e.target.value)}}  required/>
            <br/>
            <input  className='form-input' type='password' placeholder='Enter password' value={password}
                     onChange={(e) => {setPassword(e.target.value)}} required/>
            <br/>
            <label >Gender</label>
            <select className='form-input' onChange={(e) => {setGender(e.target.value)}} value={gender}
                    required>
                <option>Male</option>
                <option>Female</option>
            </select>
            <br/>

            <button className='form-input submit-btn' type='submit'>Submit</button>

            {isSubmitting && 'Submitting...'}
        </form>
    </div>
  )
}

export default FormHandling