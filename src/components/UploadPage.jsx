import { AiOutlineCamera } from "react-icons/ai";
import React, { useState } from "react";
import { API_URL } from "../config/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Button,
    InputNumber,
    Divider,
    Form,
    Input,
    Upload,
    message,
} from "antd";
import "./UploadPage.scss";

const { TextArea } = Input;

const UploadPage = () => {
    const [imgUrl, setImgUrl] = useState(null);
    const history = useNavigate()
    
    const onChangeImage = (info) => {
        if (info.file.status === "uploading") {
            return;
        }
        if (info.file.status === "done") {
            const response = info.file.response;
            const _imageUrl = response.imageUrl;
            console.log("🚀 ~ file: UploadPage.jsx:30 ~ onChangeImage ~ _imageUrl:", _imageUrl)
            setImgUrl(_imageUrl);
        }
    };
    
    const onFinish = (values) => {
        axios
            .post(`${API_URL}/products`, {
                name: values.name,
                description: values.description,
                seller: values.seller,
                price: parseInt(values.price),
                imageUrl: imgUrl
            })
            .then((res) => {
                console.log(res)
                history('/', {replace: true})
            })
            .catch((err) => {
                console.error(err);
                message.error(`에러가 발생했습니다. ${err.message}`);
            });
        };
        
        console.log("🚀 ~ file: UploadPage.jsx:21 ~ UploadPage ~ imgUrl:", imgUrl)
        return (
            <div className="upload-container">
            <Form name="uploadForm" onFinish={onFinish} className="uploadForm">
                <Form.Item name="upload">
                    <Upload
                        name="image"
                        action={`${API_URL}/image`}
                        listType="picture"
                        showUploadList={false}
                        onChange={onChangeImage}
                    >
                        {imgUrl ? (
                            <img
                                className="upload-img"
                                src={`${API_URL}/${imgUrl}`}
                                alt="img"
                            />
                        ) : (
                            <div className="upload-img-placeholder">
                                <AiOutlineCamera className="icon-camera" />
                                <span>이미지를 업로드 해주세요</span>
                            </div>
                        )}
                    </Upload>
                </Form.Item>
                <div>
                    <Form.Item
                        label={<span className="upload-label">상품명</span>}
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "상품명은 필수 입력 사항입니다.",
                            },
                        ]}
                    >
                        <Input
                            className="upload-name"
                            placeholder="상품명을 입력해주세요"
                            size="large"
                        />
                    </Form.Item>
                    <Divider></Divider>

                    <Form.Item
                        label={<span className="upload-label">판매자명</span>}
                        name="seller"
                        rules={[
                            {
                                required: true,
                                message: "판매자명은 필수 입력 사항입니다.",
                            },
                        ]}
                    >
                        <Input
                            className="upload-seller"
                            placeholder="판매자명을 입력해주세요"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        label={<span className="upload-price">판매가</span>}
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: "판매가는 필수 입력 사항입니다.",
                            },
                        ]}
                        initialValue={0}
                    >
                        <InputNumber
                            className="upload-price"
                            size="large"
                            min={0}
                            defaultValue={0}
                        />
                    </Form.Item>
                    <Divider></Divider>
                    <Form.Item
                        label={<span className="upload-label">상품설명</span>}
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: "상품설명은 필수 입력 사항입니다.",
                            },
                        ]}
                    >
                        <TextArea
                            size="large"
                            id="product-description"
                            showCount
                            maxLength={300}
                            placeholder="상품설명을 작성해주세요"
                        ></TextArea>
                    </Form.Item>
                    <Form.Item>
                        {/* {contextHolder} */}
                        <Button id="submit-button" htmlType="submit">
                            상품등록하기
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default UploadPage;
