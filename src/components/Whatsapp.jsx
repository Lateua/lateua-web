import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import Lateua from '../img/Lateua.png';

export const Whatsapp = () => {
    return(
        <>
            <WhatsAppWidget
                phoneNo="34623001833"
                position="right"
                widgetWidth="300px"
                widgetWidthMobile="260px"
                autoOpenTimeout={2000}
                autoOpen={true}
                messageBox={true}
                iconSize="70"
                headerIcon={Lateua}
                headerTitle="Lateua"
                headerCaption="En linea"
                headerBgColor="#557571"
                bodyBgColor="#ded2c2"
                chatPersonName="Soporte"
                chatMessage={<>¡Hola! 👋 <br /><br /> ¿En qué podemos ayudarte?</>}
                footerBgColor="#c2c9c9"
                btnBgColor="#557571"
                btnTxtColor="white"
                btnTxt="Comenzar Chat"
		    />
        </>
    );
}