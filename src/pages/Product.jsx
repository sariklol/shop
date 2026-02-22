import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Product = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                setItem(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Загрузка...</h2>;
    if (!item) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Товар не найден</h2>;

    const discountPrice = (item.price - (item.price * item.discountPercentage / 100)).toFixed(2);

    return (
        <div className="container">
            <Link to="/products" style={{ margin: '20px 0', display: 'inline-block', color: '#4f46e5', fontWeight: '600' }}>
                ← Назад в каталог
            </Link>

            <div className="detail-box">
                <div className="slider-container">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={true}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={false}
                        className="mySwiper"
                    >
                        {item.images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-zoom-container">
                                    <img src={img} alt={`${item.title} - ${i}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="info">
                    <span style={{ color: '#64748b', fontSize: '14px', textTransform: 'uppercase' }}>{item.category}</span>
                    <h1>{item.title}</h1>
                    <p style={{ color: '#64748b', margin: '15px 0 25px', lineHeight: '1.6' }}>{item.description}</p>

                    <div className="price-row-detail">
                        <div className="price-big">${discountPrice}</div>
                        <div className="price-old-info">
                            <del>${item.price}</del>
                            <span className="discount-badge">-{item.discountPercentage}%</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '20px', padding: '15px', background: '#f1f5f9', borderRadius: '10px' }}>
                        <p>На складе: <b>{item.stock} шт.</b></p>
                        <p>Рейтинг: <b>{item.rating}</b></p>
                    </div>

                    <button className="buy-btn" style={{ width: '100%', marginTop: '30px', fontSize: '18px' }}>
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;