import React from "react";
import preloader from "../../../image/Spin-1.5s-200px.svg";
import style from "./Preload.module.css";


type PreloaderType = {

}

export const Preloader: React.FC<PreloaderType> = (props) => {
    return(
        <div>
            <img src={preloader} alt="Preload" className={style.img_style}/>
        </div>
    );
}
