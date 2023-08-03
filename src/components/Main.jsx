import { FaWolfPackBattalion } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MainSlider from "./MainSlider";
import Mdpick from "./Mdpick";
import Magazine from "./Magazine";
import { Link } from "react-router-dom";

const Main = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        let url =
            "http://127.0.0.1:8080/products";
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                const products = res.data.products;
                setProduct(products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <MainSlider />
            <Mdpick />
            <div className="banner">
                <p> 🧤 </p>
                <p> 🪑 </p>
                <p> 🛁 </p>
                <p> 👜 </p>
                <p> 🚪 </p>
            </div>
            <div className="products">
                <h2>Products</h2>
                <div className="product-list p-list">
                    {products.map((product, idx) => (
                        <Link to={`/productpage/${idx}`} className="product-link">
                            <div className="product-card" key={idx}>
                                <div>
                                    <img
                                        src={product.imageUrl}
                                        alt="product-img"
                                        className="product-img"
                                    />
                                </div>
                                <div className="product-contents">
                                    <span className="product-name">
                                    {product.name}
                                    </span>
                                    <span className="product-price">
                                        {product.price}원
                                    </span>
                                    <span className="product-seller">
                                        <FaWolfPackBattalion className="product-avatar" />
                                        <span>{product.seller}</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Magazine />
        </div>
    );
};

export default Main;
