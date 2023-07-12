import Button from "../Components/Button";
import logo from '../logo.svg';

function Player () {

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
    console.log(process.env.REACT_APP_CLIENT_ID)
}

function pee() {
    console.log("LEFT")
}

export default Player;