import { useNavigate } from "react-router-dom";
import Button from "../Components/Button"
import "./Connect.css"
function Connect() {
    const navigate = useNavigate();
    const redirect = () => navigate("/1");
    return(
        <div className="center">
            <Button name ="Connect" 
                    id="btnConnect" 
                    className="button"
                    onclick={redirect}
            /> 
        </div>
    );
}

export default Connect;