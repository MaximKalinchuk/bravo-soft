import React from "react";

function Menu({ setSecondPage, setFirstPage }) {
    return (
        <div className="menu">
            <div className="menu-container">
                <ul className="menu-navbar">
                    <a className="logo" href="#">APPLICATIONS</a>
                    <li>
                        <a onClick={setFirstPage} href="#">Оставить заявку</a>
                    </li>
                    <li>
                        <a onClick={setSecondPage} href="#">Просмотреть заявки</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;