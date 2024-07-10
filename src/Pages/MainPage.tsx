
const MainPage = () => {
    return (
        <div className="main-page__container">
            <a href="./pizza">
                <img src="./img/pizza_btn.png" alt="" />
                <h2>Піца</h2>
            </a>
            <a href="./sushi">
                <img src="./img/sushi_btn.png" alt="" />
                <h2>Суші</h2>
            </a>
            <address className="address">
                <h2>Наша адреса:</h2>
                <p>
                    м. П&apos;ятихатки, Дніпропетровська обл., вул. Якась 25
                </p>
                <p>
                    Пн - Нд <br />8:00 - 20:00
                </p>
            </address>
        </div>
    );
}

export default MainPage;