import React, { useEffect, useState } from "react";
import "./TheGrid.css";
import TheCard from "../card/TheCard";
import { useSelector } from "react-redux";
import { handleGroupingOrOrderingChange } from "../../utils/handlers";
import CardHeader from "../cardHeading/CardHead";

const TheGrid = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const grouping = useSelector((state) => state.grouping.grouping);
    const ordering = useSelector((state) => state.sorting.sortBy);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    let [resultitems, setResultItems] = useState([]);

    useEffect(() => {
        if (data) {
            const updatedItems = handleGroupingOrOrderingChange(data, grouping, ordering);
            setResultItems(updatedItems);
        }
    }, [grouping, ordering, data]);


    return (
        <div className="grid-container">
            {(!loading && !error) && resultitems.map((item, index) => (
                <div key={index} className="grid-item">
                    <CardHeader index={index} users={data.users} count={item.length}/>
                    {(item!==undefined)  && item.map((dataObject, index) => (
                        <div key={index} className="grid-grid-item">
                            <TheCard data={dataObject} users={data.users}/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TheGrid;