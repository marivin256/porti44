import { Outlet } from "react-router-dom";
import Port from '../assets/components/Navport';
function Mainlayout(){
    return(
        <>
        <Port/>
        <Outlet/></>
    )

}
export default Mainlayout;