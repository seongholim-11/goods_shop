import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../config/constants"
import "./ProductPage.scss";

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        axios
        .get(`${API_URL}/products/${id}`)
        .then((res) => {
            console.log("🚀 ~ file: ProductPage.jsx:16 ~ .then ~ res:", res)
            setProduct(res.data.product)
        })
        .catch((err) => {
            
        });
    }, []);

    if(product === null){
        return(
            <h2>상품 정보를 받고 있습니다....</h2>
            )
        }
        
        console.log("🚀 ~ file: ProductPage.jsx:11 ~ ProductPage ~ product:", product)
    return (
        <div>
            <button onClick={() => navigate(-1)} className="back-btn">👈</button>
            <div className="product-wrap">
                <div className="image-box">
                    <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
                </div>
                <div className="contents-box">
                    <div className="name">name: {product.name}</div>
                    <div className="price">price: {product.price}</div>
                    <div className="createAt">date: 2023.08.02</div>
                    <div className="description">description: {product.description}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
