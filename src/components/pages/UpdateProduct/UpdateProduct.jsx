import React from "react";
import Text from "../../UI/Text/Text";
import CustomInput from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import "./UpdateProduct.css"

function UpdateProduct(){
    return(
        <div className="form">
            <Text text="Innovación y control al alcance de tu mano" size="large"/> <br />
            <Text text="Clave del producto" size="medium"/>
            <CustomInput type="number" placeholder="Clave"/>
            <Text text="Nombre del producto" size="medium"/>
            <CustomInput type="text" placeholder="Nombre del producto"/>
            <Text text="Cantidad" size="meduim"/>
            <CustomInput type="number" placeholder="Cantidad"/>
            <Text text="Precio de compra" size="medium"/>
            <CustomInput type="number" placeholder="Precio de compra"/>
            <Text text="Precio de venta"size="medium"/>
            <CustomInput type="number" placeholder="Precio de venta"/>
            <Text text="Sección" size="medium"/>
            <CustomInput type="text" placeholder="Sección"/>
            <Button caption="Actualizar Producto" />
        </div>
    );
}

export default UpdateProduct;