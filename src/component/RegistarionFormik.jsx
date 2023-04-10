import { Field, Form, Formik, yupToFormErrors } from 'formik'
import React from 'react'
import * as Yup from "yup";
export const RegistarionFormik = () => {

    const validation= Yup.object().shape({
        fName: Yup.string().min(2, "Too Short!").min(2,"too less!").max(10, "Too Long!").required("Please Enter first name!"),
        lName: Yup.string().min(2, "Too Short!").min(2,"too less!").max(10, "Too Long!").required("Please Enter last Name!"),
        mobile: Yup.number().required("please enter mobile number"),
        email: Yup.string().email('invalid email').required("Please enter email").test('is-email', 'Invalid email address', function(value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          }),
        school: Yup.array().min(1, "Please select any one!"),
    });
    return (
        <div className='container-fluid'>
            <div className='container'>
                <h1 className='text-center'>Registration form</h1>
                <Formik
                    initialValues={{ 
                        fName:'',
                        lName:'',
                        email: '',
                        mobile: '',
                        // school:[],
                        // location:{
                        //     district:"",
                        //     state:""
                        // }
                        
                    }}
                    validationSchema={validation}
                    onSubmit={(values)=>{
                        console.log("values", values)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                    }) => (
                        <Form>
                            <div className='row align-items-center justify-content-center'>
                                <div className='col-6'>
                                    <Field className='w-100 p-2' type='text' name="fName" placeholder='First name'></Field>
                                    <Field className='w-100 p-2' type='text' name="lName" placeholder='Last name'></Field>
                                    <Field className='w-100 p-2' type='number' name="mobile" placeholder='Mobile name'></Field>
                                    <Field className='w-100 p-2' type='email' name="email" placeholder='email'></Field>
                                    <Field className='w-100 p-2'>{({field,form})=>{
                                        <select name='school' onChange={()=>{
                                            console.log("school",school)
                                        }}>
                                            <option value=''>select school</option>
                                            <option value='avadh'>avadh</option>
                                            <option value='SHEF'>SHEF</option>
                                            <option value='aryavart'>aryavart</option>
                                        </select>
                                    }}</Field>
                                    <button type='submit'>register</button>
                                </div>
                            </div>
                        </Form>
                        
                    )}
                </Formik>
            </div>

        </div>
    )
}

