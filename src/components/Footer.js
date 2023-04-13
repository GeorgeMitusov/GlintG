import React, { useContext } from 'react';
import { Context } from '../context/Context';

import Logo from '../assets/logo-footer.png';

import '../styles/Footer.scss';

const Footer = () => {

    const { footerSubscribe, setFooterSubscribe } = useContext(Context);

    const subscribe = () => setFooterSubscribe(true);

    const onSubmit = e => {
        e.preventDefault();

        subscribe();
    }

    return (
        <section className='footer'>

            <div className='footer-container'>

                <div className='footer-content'>

                    <div className='footer-content-left'>
                        <img src={Logo} alt='#' />
                        <p>
                            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
                        </p>
                    </div>

                    <div className='footer-content-right'>
                        
                        <h4> Get Notified </h4>

                        <p>
                            Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.
                        </p>

                        <div className='subscribe-form'>
                            <form
                                onSubmit={ onSubmit }
                            >
                                <input
                                    type='email'
                                    className='subscribe-form-email'
                                    placeholder='Email Address'
                                    name="EMAIL"
                                />
                                <input
                                    type='submit'
                                    value="Subscribe"
                                    className='subscribe-form-submit'
                                />
                            </form>
                            { footerSubscribe && <p className='subscribe-submitting'> Submitting... </p>}
                        </div>

                    </div>

                </div>

                <div className='footer-content-bottom'>

                    <span 
                        className='footer-content-bottom-left'
                    > 
                        © Copyright Glint 2022
                    </span>
                    <span
                        className='footer-content-bottom-right'
                    > 
                        Site Template Remade by
                        <a href="/#"> George </a>
                    </span>

                </div>

            </div>

        </section>
    )
}

export default Footer
