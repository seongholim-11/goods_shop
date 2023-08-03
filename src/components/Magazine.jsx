import React from "react";

const Magazine = () => {
    return (
        <div className="magazine">
            <div className="container">
            <h2>Magazine</h2>
                <div className="MagazineList">
                    <ul>
                        <li>
                            <div className="magazine-box">
                                <div className="m">M</div>
                                <div className="a1">A</div>
                                <div className="g">G</div>
                                <div className="a2">A</div>
                                <div className="z">Z</div>
                                <div className="i">I</div>
                                <div className="n">N</div>
                                <div className="e">E</div>
                            </div>
                        </li>
                        <li>
                            <img src="img/magazine/magazine1.png" alt="1" />
                        </li>
                        <li>
                            <img src="img/magazine/magazine2.png" alt="1" />
                        </li>
                        <li>
                            <img src="img/magazine/magazine3.png" alt="1" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Magazine;
