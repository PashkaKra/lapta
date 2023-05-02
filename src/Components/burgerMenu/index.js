import "./style.css";

const BurgerMenu = ({menuVis}) => {
    return(
        <div className={menuVis?"burger  active":"burger"}>
            <span></span>
        </div>
    );
}

export {BurgerMenu}