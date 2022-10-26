import React from "react";
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.caviarcriativo.com/wp-content/uploads/2020/06/logotipo-da-netflix.jpg" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="http://2.bp.blogspot.com/_Pew7yWRft44/S_Q_zQZq2QI/AAAAAAAAAmE/KKYew2TpOMc/s320/olho-gordo-2_1.jpg" alt="Usuário" />
                </a>
            </div>
        </header>
    )

}

