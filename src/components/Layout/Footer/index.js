import React, { Fragment } from 'react';

import playstore from '../../../assets/images/playstore.png';
import apple_store from '../../../assets/images/apple_store.png';
import arrow_right from '../../../assets/images/arrow_right.png';

import facebook_icon from '../../../assets/images/facebook_icon.png';
import instagram_icon from '../../../assets/images/instagram_icon.png';
import twitter_icon from '../../../assets/images/twitter_icon.png';
import beonshop_logo from '../../../assets/images/beonshop_logo.png';

export default function Footer() {
    return (
        <Fragment>
            <div className="Footer">
                    <div className="container">
                        <div className="Footer-info">
                            <div className="row">
                                <div className="col-xs-12 col-md-4 col-lg Footer-col">
                                    <h5 className="block-title Footer-title">App</h5>
                                    <a href="#" className="Footer-playstore">
                                        <img src={playstore} alt="Download our app on Google Playstore"/>
                                    </a>
                                    <a href="#" className="Footer-apple_store">
                                        <img src={apple_store} alt="Download our app on Apple Store"/>
                                    </a>
                                </div>
                                <div className="col-xs-12 col-md-4 col-lg Footer-col">
                                    <h5 className="block-title Footer-title">Tienda</h5>
                                    <ul className="Footer-links">
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Servicios</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Productos</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Bodas</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Estilos</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Locales Bellify</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-md-4 col-lg Footer-col">
                                    <h5 className="block-title Footer-title">Sobre Bellify</h5>
                                    <ul className="Footer-links">
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Nuestro Equipo</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Partners</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Blog</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Reviews</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Prensa y medios</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Únete a nosotros</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-md-4 col-lg Footer-col">
                                    <h5 className="block-title Footer-title">Ayuda</h5>
                                    <ul className="Footer-links">
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">FAQ</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Términos y condiciones</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Privacidad</a>
                                        </li>
                                        <li className="Footer-link">
                                            <a href="#" className="text-small">Contacto</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-md-4 col-lg Footer-col">
                                    <h5 className="block-title Footer-title">Siguenos</h5>
                                    <div className="Footer-social">
                                        <a href="#" className="Footer-social-link">
                                            <img src={twitter_icon} alt="Twitter" className="Footer-twitter"/>
                                        </a>
                                        <a href="#" className="Footer-social-link">
                                            <img src={facebook_icon} alt="Facebook" className="Footer-facebook"/>
                                        </a>
                                        <a href="#" className="Footer-social-link">
                                            <img src={instagram_icon} alt="Instagram" className="Footer-instagram"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="Footer-newsletter">
                            <h5 className="block-title Footer-newsletter-title">Newsletter</h5>
                            <form action="" className="Footer-form flex-row-start">
                                <input type="text" name="name" id="name" className="Footer-input" placeholder="Nombre" />
                                <input type="text" name="email" id="email" className="Footer-input" placeholder="Correo electrónico" />
                                <button type="submit" className="Footer-submit">
                                    <img src={arrow_right} className="Footer-submit-icon"/>
                                </button>
                            </form>
                        </div> */}
                </div>
                <div className="Footer-bottomBar">
                    <div className="Footer-bottomBar-wrapper container">
                        <span className="Footer-copy">&copy; 2019 Bellify. All rights reserved.</span>
                        <p className="Footer-powered mb-0">Work done by <img src={beonshop_logo} alt="Beonshop" className="Footer-beonshop"/></p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}