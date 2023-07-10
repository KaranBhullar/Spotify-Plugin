import './Button.css'

interface Props {
    name:string;
    id:string;
    className:string;
    onclick: () => void;
}

function Button({name, id, className, onclick} :Props) {
    return (
        <button id={id} 
                className={className}
                onClick={onclick}
        >{name}</button>
    );
}

export default Button;