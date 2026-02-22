import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useProductStore } from '../store/useProductStore';

const Products = () => {
    const { products, total, loading, error, fetchProducts } = useProductStore();
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState('');

    useEffect(() => {
        const skip = page * 12;
        if (sort) {
            const [sortBy, order] = sort.split('-');
            fetchProducts(skip, sortBy, order);
        } else {
            fetchProducts(skip);
        }
    }, [page, sort, fetchProducts]);

    const handlePageClick = (data) => setPage(data.selected);

    const getDiscountPrice = (price, discount) => (price - (price * discount / 100)).toFixed(2);

    if (error) return <div className="container"><h2>{error}</h2></div>;

    return (
        <div className="container">
            <div className="catalog-head">
                <h1>Каталог товаров</h1>
                <select onChange={(e) => { setSort(e.target.value); setPage(0); }}>
                    <option value="">Без сортировки</option>
                    <option value="title-asc">Название (А-Я)</option>
                    <option value="price-asc">Сначала дешевые</option>
                    <option value="price-desc">Сначала дорогие</option>
                </select>
            </div>

            {loading ? <h2 style={{ textAlign: 'center' }}>Загрузка...</h2> : (
                <>
                    <div className="products-grid">
                        {products.map((item) => (
                            <Link to={`/products/${item.id}`} key={item.id} className="card">
                                <img src={item.thumbnail} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p className="desc">{item.description}</p>
                                <div className="price-row">
                                    <div className="prices">
                                        <span className="old">${item.price}</span>
                                        <span className="new">${getDiscountPrice(item.price, item.discountPercentage)}</span>
                                    </div>
                                    <span className="stock">На складе: {item.stock}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <ReactPaginate
                        previousLabel={"< Назад"}
                        nextLabel={"Вперед >"}
                        pageCount={Math.ceil(total / 12)}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        forcePage={page}
                    />
                </>
            )}
        </div>
    );
};

export default Products;