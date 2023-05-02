import { useEffect, useState } from "react";
import "./style.css"
import slides from "./slides.json";

const MainPage = () => {
    const [slideNum, setSlideNum] = useState(0);
    useEffect(() => {
        const slideTimer = setInterval(() => {
                setSlideNum((prev) => prev < slides.length-1 ? prev + 1 : 0);
        }, 5000);
        return () => clearInterval(slideTimer);
    }, [slideNum]);

    const changeSlide = (pos) => setSlideNum(pos-1);

    return(
        <div id="main" className="main">
            <img src={slides[slideNum].src} alt={slides[slideNum].title}/>
            <div className="wrap">
                {slides.map((item) => {
                    return(
                        <div onClick={() => changeSlide(item.id)} className={item.id === slideNum+1 ? "slide-point active":"slide-point"}></div>
                    );
                })}
            </div>  
        </div>
    );
}

export {MainPage}