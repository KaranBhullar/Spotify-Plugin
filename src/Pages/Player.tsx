import Button from "../Components/Button";
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';

function Player () {
    const navigate = useNavigate();

    return (
        <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Button name="Pee"
            id="btnLeft"
            className="button"
            onclick={pee}
        />
        <Button name="Poo"
            id="btnRight"
            className="button"
            onclick={poo}
        />
    </div>
    );
}

function poo() {
    console.log("RIGHT")
}

function pee() {
    console.log("LEFT")
}

export default Player;