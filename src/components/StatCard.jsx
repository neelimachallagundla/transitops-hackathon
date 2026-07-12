import {
    FaArrowTrendUp
} from "react-icons/fa6";

import "../styles/StatCard.css";

export default function StatCard({

    icon,
    title,
    value,
    color,
    growth

}) {

    return (

        <div className="stat-card">

            <div
                className="icon-box"
                style={{ background: color }}
            >

                {icon}

            </div>

            <div className="stat-info">

                <h4>{title}</h4>

                <h2>{value}</h2>

                <span>

                    <FaArrowTrendUp />

                    {growth}

                </span>

            </div>

        </div>

    );

}