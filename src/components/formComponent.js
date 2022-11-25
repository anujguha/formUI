import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import './style.css';


function FormComponent() {
    const [isSubmit , setIsSubmit ] = useState(false);
    const [errors , setErrors ] = useState({});
    const [errorsbool , setErrorsbool ] = useState(false);
    
    const [inputs, setInputs] = useState({
        Fname: "",
        Lname: "",
        email:  "",
        UserID: "",
        AdhaarID: "",
        mobile: "",
        social: "",
    });
    const handleChange = (e) => {
        
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log([e.target.name], e.target.value);
        handleReseterror();
    };
    
    const handleReset = () => {
        setInputs(() => ({
            Fname: "",
            Lname: "",
            email: "",
            UserID: "",
            AdhaarID: "",
            mobile: "",
            social: "",
        }));
    };
    const handleReseterror = () => {
        setErrors(() => ({
            Fname: "",
            Lname: "",
            email: "",
            UserID: "",
            AdhaarID: "",
            mobile: "",
            
        }));
    };

    const handleSubmit = (e) => {
        handleChange(e);
        e.preventDefault();
        setErrors(ValidateForm(inputs));
        setIsSubmit(true);
        
        console.log(errorsbool);
        if( !errorsbool && isSubmit){
            console.log(inputs);
            
        }
        else{
            handleSubmit(e);
            console.log(inputs);
            console.log(errors);
            
        }
    } ;


      function ValidateForm (inputs) {
        var Fname = inputs.Fname;
        var Lname = inputs.Lname;
        var UserID = inputs.UserID;
        var AdhaarID = inputs.AdhaarID;
        var Email = inputs.email;
        var mobile = inputs.mobile;
        var regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/g;
        
    
        
        if( Fname === "" ){
            errors.Fname = "First name is required";
            setErrorsbool(true);
        }
        if( Lname === "" ){
            errors.Lname = "Last name is required";setErrorsbool(true);
        }
        if( UserID === "" ){
            errors.UserID = "Please enter a valid UserID.";setErrorsbool(true);
        }
        if( AdhaarID === "" ){
            errors.AdhaarID = "AdhaarID  is required";setErrorsbool(true);
        }
        if( AdhaarID.length !== 16 ){
            errors.AdhaarID = "Please enter a valid AdhaarID.";setErrorsbool(true);
        }
        if (Email === "" || !regEmail.test(Email)) {
            errors.email = "Please enter a valid e-mail address.";setErrorsbool(true);
            
        }
        if( mobile.length !== 10 ){
            errors.mobile = "Please enter mobile No.";setErrorsbool(true);
        }
        return errors;
    }
    
    

    return (<div>
        
            <form>
                <h3>Personal Info</h3>
                
                <div >
                    <TextField
                        className='TextField1'
                        name='Fname'
                        value={inputs.Fname}
                        onChange={handleChange}
                        type={'text'}
                        label={'First Name'}
                        error={errors.Fname}
                        helperText={errors.Fname}
                        variant="filled"
                    />
                    
                    <TextField
                        className='TextField1'
                        name='Lname'
                        value={inputs.Lname}
                        onChange={handleChange}
                        type={'text'}
                        label={'Last Name'}
                        error={errors.Lname}
                        helperText={errors.Lname}
                        variant="filled"
                    />
                    
                </div>
                
                
                <div>
                    <TextField
                        className='TextField'
                        name="UserID"
                        value={inputs.UserID}
                        onChange={handleChange}
                        type={'text'}
                        label={"User ID"}
                        error={errors.UserID}
                        helperText={errors.UserID}
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        className='TextField'
                        name='AdhaarID'
                        value={inputs.AdhaarID}
                        onChange={handleChange}
                        type={'number'}
                        label={'Adhaar No.'}
                        error={errors.AdhaarID}
                        helperText={errors.AdhaarID}
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        className='TextField'
                        name='email'
                        value={inputs.email}
                        onChange={handleChange}
                        type={'email'}
                        label={'E-mail'}
                        required 
                        error={errors.input}
                        variant="filled"
                        helperText={errors.AdhaarID}
                    />
                </div>
                <div>
                    <TextField
                        className='TextField'
                        name='mobile'
                        value={inputs.mobile}
                        onChange={handleChange}
                        type={'number'}
                        label={'mobile No.'}
                        error={errors.mobile}
                        variant="filled"
                        helperText={errors.mobile}
                    />
                    
                </div>
                <div>
                    <TextField
                        className='TextField'
                        name='social'
                        value={inputs.social}
                        onChange={handleChange}
                        type={'url'}
                        label={'social Profile'}
                        variant="filled"
                       
                    />
                </div>
                <div className='btn'>
                    <div>
                        <Button variant='contained' color='primary' onClick={handleSubmit} type={'submit'} >Submit</Button>
                    </div>
                    <div>
                        <Button variant='contained'  onClick={handleReset} type={'reset'}>Reset</Button>
                    </div>
                </div>
            </form></div>
        
    )
}

export default FormComponent
