import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import '../styles/ContactForm.scss';

const ContactForm = () => {

    const [ successMsg, setSuccessMsg ] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm();

    const form = useRef();
    
    const sendEmail = e => {

        e.preventDefault();

        emailjs.sendForm("service_l3d7iwl", 'glint_email_reply', form.current, 'X6BZThkDbGkN2NKjC')
        .then( result => {
            console.log("EMAIL_SUCCESS", result.status, result.text);
        }, error => {
            console.log("EMAIL_ERROR", error.text);
        })
        
        e.target.reset();
    }

    const onSubmit = e => {
        sendEmail(e);
        setSuccessMsg(true);
        reset();
    }

    const formContent = (
        <>
            <div className="contact-form-box">
                <input
                    { 
                        ...register( "name", { 
                            required: true,
                            maxLength: 20, 
                            pattern: /^[A-Za-z]+$/i,
                            minLength: 2,
                        })
                    }  
                    id="contactName" 
                    placeholder='Your Name'
                    name="name"
                />
                
                { errors?.name?.type === "required" && (
                    <label className='contact-form-box-title require'> This field is required. </label>
                )}
                { errors?.name?.type === "maxLength" && (
                    <label className='contact-form-box-title'> First name cannot exceed 20 characters. </label>
                )}
                { errors?.name?.type === "minLength" && (
                    <label className='contact-form-box-title'> Please enter at least 2 characters. </label>
                )}
                { errors?.name?.type === "pattern" && (
                    <label className='contact-form-box-title'> Alphabetical characters only. </label>
                )}
            </div>

            <div className="contact-form-box">
                <input
                    type="text"
                    id="contactEmail" 
                    placeholder='Your Email'
                    name="email"
                    { 
                        ...register( "email", { 
                            required: true,
                            maxLength: 20, 
                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            minLength: 8,
                        })
                    }
                />
                { errors?.email?.type === "required" && (
                    <label className='contact-form-box-title require'> This field is required. </label>
                )}
                { errors?.email?.type === "maxLength" && (
                    <label className='contact-form-box-title'> Email cannot exceed 20 characters. </label>
                )}
                { errors?.email?.type === "minLength" && (
                    <label className='contact-form-box-title'> Please enter at least 8 characters. </label>
                )}
                { errors?.email?.type === "pattern" && (
                    <label className='contact-form-box-title'> Please enter a valid email address. </label>
                )}
            </div>

            <div className="contact-form-box">
                <input
                    { ...register( "subject")}  
                    id="contactSubject" 
                    placeholder='Subject'
                    name="subject"
                />
            </div>

            <div className="contact-form-box">

                <textarea
                    { 
                        ...register( "message", 
                        { 
                            required: 'This is required',
                            minLength: 15,
                        })
                    } 
                    className='contactMessage'
                    id='contactMessage'
                    placeholder='Your Message'
                    name="message"
                />

                { errors?.message?.type === "required" && (
                    <label className='contact-form-box-title textarea require '> This field is required. </label>
                )}
                { errors?.message?.type === "minLength" && (
                    <label className='contact-form-box-title textarea'> Please enter at least 15 characters. </label>
                )}

            </div> 

            <div className="contact-form-box">

                <button className='contact-form-submit-btn'> 
                    submit
                </button>

            </div>
        </>
    );

    const sucMsg = (
        <div className='message-success'>
            <p className="success-msg"> 
                Your message was sent, thank you! 
            </p> 
        </div>
    );        

    return (
        <form 
            className='contact-form'
            ref={form}
            onSubmit={ e => handleSubmit(onSubmit(e))}
        >

            { successMsg ? sucMsg : formContent }

        </form>
    )
}

export default ContactForm