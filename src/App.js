import React, { useState } from 'react'

export default function App(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [semester, setSemester] = useState('');
    const [gender, setGender] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [agree, setAgree] = useState('');
    const [errors, setErrors] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        let isValid = formValidation();
        if (isValid) {
            setName('')
            setEmail('')
            setMobile('')
            setSemester('')
            setGender('')
            setMessage('')
            setPassword('')
            setCpassword('')
            setAgree('')
            setErrors({})
        }
    }
    const formValidation = () => {
        let isValid = true;
        const errors = {};
        var atposition = email.indexOf('@'); 
        var dotposition = email.lastIndexOf(".");

        //Name
        if (!name) {
            errors.name = "Enter Name"
            isValid = false
        }
        else if (name.length < 3 || name.length > 10) {
            errors.name = "Name is minimum 3 characters and maximum  10 characters"
            isValid = false
        }
        //Email
        if (!email) {
            errors.email = "Enter Email First"
            isValid = false
        }
        else if (atposition < 1) {
            errors.email = "Email Reaquired a Letter After @"
            isValid = false
        }
        else if (dotposition < atposition + 2) {
            errors.email = "There are 2 characters After .(Dot)"
            isValid = false
        }
        //Mobile
        if (!mobile) {
            errors.mobile = "Enter Mobile Number"
            isValid = false
        }
        else if (mobile.length > 10) {
            errors.mobile = "Mobile Number Is Only 10 Degit"
            isValid = false
        }
        else if (mobile.length < 10) {
            errors.mobile = "Mobile Number Should At Least 10 Degit"
            isValid = false
        }
        //Semester
        if (!semester) {
            errors.semester = "Select Semester"
            isValid = false
        }
        //Gender
        if (!gender) {
            errors.gender = "Select Gender"
            isValid = false
        }
        //Message
        if (!message) {
            errors.message = "Enter Messeage "
            isValid = false
        }
        else if (message.length <= 20) {
            errors.message = "Messeage must be only 20 characters"
            isValid = false
        }
        //Password
        if (!password) {
            errors.password = "Enter password"
            isValid = false
        }
        else if (password.length < 8) {
            errors.password = "Enter Minimum 8 character Password"
            isValid = false
        }
        //Cpassword
        if (!cpassword) {
            errors.cpassword = "Enter Cpassword"
            isValid = false
        }
        else if (cpassword !== password) {
            errors.cpassword = "Cpassword did not match"
            isValid = false
        }
        //Agree
        if (!agree) {
            errors.agree = "Please select terms and Condition"
            isValid = false
        }
        //Set error
        setErrors(errors)
        return isValid

    }

    return (
        <React.Fragment>
            <h1>Registration Form With React Validation</h1>
            <form onSubmit={onSubmit}>
                {
                    Object.keys(errors).map(key => {
                        return <div style={{ color: 'red' }} key={key}>{errors[key]}</div>
                    })
                }

                Name:<input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                Email: <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                Mobile:<input type='number' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} /><br /><br />
                Semester:<select name='semester' value={semester} onChange={(e) => setSemester(e.target.value)}>
                    <option defaultValue={1}>-select option-</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select><br /><br />
                Gender: &nbsp;<span>Male<input type='radio' name='gender' value='Male' onChange={(e) => setGender(e.target.value)} /></span>
                <span>Female<input type='radio' name='gender' value='Female' onChange={(e) => setGender(e.target.value)} /></span><br /><br />


                Message:<textarea name='message' onChange={(e) => setMessage(e.target.value)} value={message} /><br /><br />
                Password:<input type='password' name='password' onChange={(e) => setPassword(e.target.value)} value={password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" /><br /><br />
                Confirm Password:<input type='password' name='cpassword' onChange={(e) => setCpassword(e.target.value)} value={cpassword} /><br /><br />
                I agree Term & Condition <input type='checkbox' name='agree' onChange={(e) => setAgree(e.target.value)} /><br /><br />
                <button>Submit</button>
            </form>
        </React.Fragment>
    );

}