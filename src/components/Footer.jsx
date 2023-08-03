import { GiBeech } from "react-icons/gi";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="foot-bg">
            <div className="container">
                <h3 className="foot-logo">
                    <GiBeech style={{ fontSize: "100px" }} />
                </h3>
                <div className="foot-addr">
                    <p>개인정보 처리방침 서비스 이용약관</p>
                    <address>
                        경기도 수원시 팔달구 1352-6 엠파이어 스테이트 빌딩
                        120~260층
                    </address>
                    <p>추가 연락처 정보 </p>
                    <p>고객지원팀: 031-846-xxxx </p>
                    <p>이메일 문의: suwon@suwon.co.kr </p>

                    <div className="copy">
                        &copy; 2023 IamInteriorboy. All rights reserved.
                    </div>
                    <p>우리는 모든 사용자에게 웹사이트 접근성을 보장합니다.</p>
                </div>
                <div className="foot-menu">
                    <ul>
                        <li>
                            <Link to="" style={{ color: "black" }}>
                                About
                            </Link>
                            <ul>
                                <li>
                                    <Link to="" style={{ color: "black" }}>
                                        commpany
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "black" }}>
                                        commpany
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "black" }}>
                                        commpany
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" style={{ color: "black" }}>
                                SNS
                            </Link>
                            <ul>
                                <li>
                                    <Link to="" style={{ color: "black" }}>
                                        twitter
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "black" }}>
                                        blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "black" }}>
                                        instagran
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "black" }}>
                                        youtube
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" style={{ color: "black" }}>
                                products
                            </Link>
                            <ul>
                                <li>
                                    <Link to="" style={{ color: "black" }}>
                                        cup
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "black" }}>
                                        bag
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "black" }}>
                                        chair
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
