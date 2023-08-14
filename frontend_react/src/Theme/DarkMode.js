import {React,useState }from "react";
import {BsSun} from 'react-icons/bs'
import "./DarkMode.scss";

const DarkMode = () => {

    const [mode, setMode] = useState("light-theme")

    return (
        <div className='dark_mode'>
            <button className="light"><BsSun/></button>
        </div>
    );
};

export default DarkMode;
