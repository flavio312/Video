import CustomInput from "../../UI/Input/Input";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";

function DeleteEmployee (){
    return (
        <div>
            <Text text="" size="large"/><br />
            <Text text="Ingresse el nombre del producto a eliminar" size="medium" />
            <CustomInput type="text" placeholder="Producto"/>
            <Button caption="Eliminar"/>
        </div>
    );
}

export default DeleteEmployee;