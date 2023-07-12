import { useNavigate } from "react-router-dom";
import { generateCodeChallenge, generateRandomString } from "../OAuth2";
import Button from "../Components/Button"
import "./Connect.css"

const clientID = process.env.REACT_APP_CLIENT_ID;
const redirectURI = 'http://google.com/';

let codeVerifier = generateRandomString(128);

const generateAuthorizationUrl = () => {
    const scopes = ['user-read-private', 'user-read-email', 'user-read-playback-state']; // Add additional scopes as needed
    const state = 'some-state-value'; // You can generate a random state value for added security
    const authorizeUrl = 'https://accounts.spotify.com/authorize';
    const url = `${authorizeUrl}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
      '%20'
    )}&response_type=token&state=${state}`;

    chrome.tabs.create({
        url: url
      });
  };

function Connect() {
    const navigate = useNavigate();
    const redirect = () => {
        navigate("/1");
    };
    return(
        <div className="center">
            <Button name ="Connect" 
                    id="btnConnect" 
                    className="button"
                    onclick={generateAuthorizationUrl}
            /> 
        </div>
    );
}

export default Connect;