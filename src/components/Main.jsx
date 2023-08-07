import { FaWolfPackBattalion } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MainSlider from "./MainSlider";
import Mdpick from "./Mdpick";
import Magazine from "./Magazine";
import { Link } from "react-router-dom";
import { API_URL } from "../config/constants";

const Main = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        let url = `${API_URL}/products`;
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                const products = res.data.product;
                setProduct(products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log("🚀 ~ file: Main.jsx:12 ~ Main ~ products:", products);

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
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            {product.soldout === 1 ? <div className="product-blur"></div> : null}
                            <Link
                                to={`/productpage/${product.id}`}
                                className="product-link"
                            >
                                <div>
                                    <img
                                        src={`${API_URL}/${product.imageUrl}`}
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
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Magazine />
        </div>
    );
};

export default Main;
