import "./style.css"

const Contacts = () => {
    return(
        <div id="contacts">
            <adress>
                <p>Лапта в Москве</p>
                <p>Адрес: г. Москва, м. Щукинская</p> 
                <p>
                    Телефон: 
                    <a title="Позвонить" href="tel: +79150142412">
                        <tel>+7-(915)-014-24-12</tel>
                    </a>
                </p>
            </adress>
            <div>
                <h1>ССЫЛКИ</h1>
                <a href="#galery">Галерея</a>
                <a href="#forcorp">Лапта для корпоративов</a>
            </div>
            <div>
                <h1>ПРИСОЕДИНЯЙТЕСЬ</h1>
                <a title="Вконтакте" href="https://vk.com/laptamoscow">
                    <img src="https://volgo-prime.ru/img/icons/vk-icon.svg" alt="Вконтакте" className="icon"/>
                </a>
                <a title="Whatsapp" href="whatsapp://send?phone=79150142412">
                    <img src="https://volgo-prime.ru/img/icons/whatsapp-icon.svg" alt="Whatsapp" className="icon"/>
                </a>
            </div>

        </div>
    );
}

export default Contacts;