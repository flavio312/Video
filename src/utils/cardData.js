import { faPenToSquare, faUsersViewfinder, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardData = [
  { title: "Ver productos", to: "/productos", icon: faClipboard},
  { title: "Ventas", to: "/ver-Ventas" , icon: faPenToSquare},
  { title: "Empleados", to: "/empleados", icon: faUsersViewfinder}
];

export default cardData;
