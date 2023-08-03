import React from "react";
import incens from "../assets/img/incens/incens-1.png";
import cup from "../assets/img/cup/astie-cup.jpg";
import pot from "../assets/img/pot/pot1.jpg";

const Mdpick = () => {
    return (
        <div className="mdpick">
            <h2>MDPick</h2>
            <div className="mdList">
                <ul>
                    <li>
                        <span className="md-img">
                            <img src={incens} alt="incens" />
                        </span>
                        <span className="md-name">Mogua Incens</span>
                        <span className="md-price">35,000원</span>
                        <div className="bg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, optio facilis. Veniam minus, at reprehenderit tenetur veritatis enim, dolores rem nam nobis assumenda quisquam aut quo corporis asperiores mollitia nulla.</div>
                    </li>
                    <li>
                        <span className="md-img">
                            <img src={cup} alt="cup" />
                        </span>
                        <span className="md-name">Ring Cup</span>
                        <span className="md-price">65,000원</span>
                        <div className="bg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, corporis sint voluptatem dolorem architecto at, doloribus mollitia esse ad, voluptates quos. Labore doloribus voluptates dolor similique aut ducimus numquam quas!</div>
                    </li>
                    <li>
                        <span className="md-img">
                            <img src={pot} alt="pot" />
                        </span>
                        <span className="md-name">Cup Pot</span>
                        <span className="md-price">99,000원</span>
                        <div className="bg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quia atque laborum aliquam eaque possimus voluptate vel cumque laudantium fugit dolorem similique, quisquam explicabo ad asperiores, minus porro quam. Corporis?</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Mdpick;
