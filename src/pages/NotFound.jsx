import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1 style={{ fontSize: '120px', color: '#4f46e5', marginBottom: '20px' }}>404</h1>
            <h2 style={{ marginBottom: '30px' }}>Упс! Страница не найдена</h2>
            <p style={{ color: '#64748b', marginBottom: '40px' }}>
                Похоже, вы зашли не туда. Но не волнуйтесь, наш каталог товаров всегда на месте!
            </p>
            <Link to="/" className="buy-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Вернуться на главную
            </Link>
        </div>
    );
};

export default NotFound;