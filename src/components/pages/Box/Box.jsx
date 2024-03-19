import React from "react";
import Header from "../../UI/Header/Header";
import Navigation from "../../UI/Navigation/Navigation";
import ShiftControl from "../../UI/ShiftControl/ShiftControl";
import Ventas from "../Ventas/Ventas";

function Box (){
    return (
        <>
            <Header/>
            <Navigation/> <br /> <br />
            <ShiftControl/>
            <Ventas/>
        </>
    );
}

export default Box;