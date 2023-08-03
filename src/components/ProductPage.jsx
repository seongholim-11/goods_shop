import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductPage.scss";

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        axios
        .get(`https://f6aabb72-5817-4e4f-aec3-b58c788bde8b.mock.pstmn.io/products/${id}`)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err) => {
            
        });
    }, []);

    if(product === null){
        return(
            <h2>상품 정보를 받고 있습니다....</h2>
        )
    }
    
    console.log("🚀 ~ file: ProductPage.jsx:10 ~ ProductPage ~ product:", product)
    return (
        <div>
            <button onClick={() => navigate(-1)} className="back-btn">👈</button>
            <div className="product-wrap">
                <div className="image-box">
                    <img src={`/${product.imageUrl}`} alt={product.name} />
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
