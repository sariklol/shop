import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <section className="home-hero">
                <div className="hero-content">
                    <h1>Добро пожаловать в StoreShop</h1>
                    <p>
                        Откройте для себя широкий ассортимент товаров с лучшими ценами.
                        Мы используем современные технологии для вашего удобства.
                    </p>
                    <div className="hero-btns">
                        <Link to="/products" className="buy-btn">Перейти в каталог</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;