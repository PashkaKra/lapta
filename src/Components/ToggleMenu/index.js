import { useState } from "react";
import { BurgerMenu } from "../burgerMenu"
import { MENU_ITEMS } from "../../Constants/MenuItems/MenuItems";
import "./style.css";

const ToggleMenu = () => {
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
                <div>logo</div>
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