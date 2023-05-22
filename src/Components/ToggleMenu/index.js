import { useState } from "react";
import { BurgerMenu } from "../burgerMenu"
import { MENU_ITEMS } from "../../Constants/MenuItems/MenuItems";
import "./style.css";

const ToggleMenu = ({setActive}) => {
    const [menuVis, setMenuVis] = useState(false);
    const changeMenuVis = () => {
        setMenuVis((prev) => !prev);
    }

    const menuItems = [];
    const menuURL = [];
    let count = 0;
    for(let key in MENU_ITEMS){
        menuItems[count] = MENU_ITEMS[key].title;
        menuURL[count] = MENU_ITEMS[key].url
        count++;
    }
    return(
        <nav>
            <header>
                <div><a href="#main">Лапта<br/>Москва</a></div>
                <div>
                    <a title="Вконтакте" href="https://vk.com/laptamoscow">
                        <img src="https://volgo-prime.ru/img/icons/vk-icon.svg" alt="Вконтакте" className="icon"/>
                    </a>
                </div>
                <div>
                    <a title="Whatsapp" href="whatsapp://send?phone=79150142412">
                        <img src="https://volgo-prime.ru/img/icons/whatsapp-icon.svg" alt="Whatsapp" className="icon"/>
                    </a>
                </div>
                <div>
                    <a title="Позвонить" href="tel: +79150142412">
                        <img src="https://volgo-prime.ru/img/icons/phone-icon.svg" alt="+79150142412" className="icon"/>
                    </a>
                </div>
                <div>
                    <a href="#1" onClick={() => setActive(true)}>Записаться</a>
                </div>
                <div className="wrapper" onClick={changeMenuVis}>
                    <BurgerMenu menuVis={menuVis}/>
                </div>
            </header>
            {menuVis && <div className="main-nav">
                <ul>
                    {menuItems.map((item, i) => <li key={i}><a href={menuURL[i]}>{item}</a></li>)}
                </ul>
            </div>}
        </nav>
    );
}

export {ToggleMenu}