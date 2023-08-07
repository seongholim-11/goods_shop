import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/constants";
import "./ProductPage.scss";
import { Button, Space, message } from "antd";

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const getProduct = () => {
        axios
            .get(`${API_URL}/products/${id}`)
            .then((res) => {
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getProduct();
    }, []);

    if (product === null) {
        return <h2>상품 정보를 받고 있습니다....</h2>;
    }

    const onClickPurchase = () => {
        axios
            .post(`${API_URL}/purchase/${id}`)
            .then((result) => {
                message.info("결제가 완료되었습니다.");
            })
            .catch((err) => {
                console.error(err);
                message.error("에러 발생: ", err.message);
                getProduct();
            });
    };
    return (
        <div>
            <button onClick={() => navigate(-1)} className="back-btn">
                👈
            </button>
            <div className="product-wrap">
                {product.soldout === 1 ? (
                    <div className="product-blur">
                        <div>sold-out</div>
                    </div>
                ) : null}
                <div className="image-box">
                    <img
                        src={`${API_URL}/${product.imageUrl}`}
                        alt={product.name}
                    />
                </div>
                <div className="contents-box">
                    <div className="contents">
                        <div className="name">name: {product.name}</div>
                        <div className="price">price: {product.price}</div>
                        <div className="createAt">date: 2023.08.02</div>
                        <div className="description">
                            description: {product.description}
                        </div>
                    </div>
                    <div className="button">
                        <Button onClick={onClickPurchase} disabled={product.soldout === 1 ? true : false}>purchase</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
