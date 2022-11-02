import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'antd/dist/antd.css'
import React from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';
import '../styles/Footer.css';
import { Whatsapp } from './Whatsapp';

export const Footer = () => {
    return (

        <div id="footer">
            <div id="footerCont">
                <div id="footerText">
                    <p><WhatsAppOutlined /> 623001833</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-envelope" />proyectos@lateua</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-house" /> Edificio Lanzadera, La Marina de, Carrer del Moll de la Duana, s/n, 46024 Valencia</p>
                    <p>© 2022 Lateua</p>
                </div>
                <div id="footerWhatsapp">
                    <Whatsapp/>
                </div>
            </div>
        </div>

    );
};