import React, { useEffect, useState } from "react";
import styles from "./Section.module.css"
import { CircularProgress, Tab, Tabs } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

export default function Section({ title, type, data, filterSource }) {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const [filters, setFilters] = useState([{key: "all", label:"All"}])
    const [selecetedFilterIndex, setSelecetedFilterIndex] = useState(0);

    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    }

    useEffect(() => {
        if(filterSource){
            filterSource().then((response) => {
                const { data } = response; 
                setFilters([...filters, ...data]);
            })
        }
    }, []);

    const showFilters = filters.length > 1;

    const cardsToRender = data.filter((card) => showFilters && selecetedFilterIndex !== 0 ? card.genre.key === filters[selecetedFilterIndex].key : card);

    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                {!showFilters && (<h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ? "Collapse All" : "Show All"}</h4>)}
            </div>
            {showFilters && (
                <div className={styles.filterWrapper}>
                <Filters filters={filters} selectedFilterIndex={selecetedFilterIndex} setSelectedFilterIndex={setSelecetedFilterIndex} /> 
                </div>
            )}
            {
                cardsToRender.length === 0 ? (
                    <div className={styles.circularProgress}>
                    <CircularProgress/>
                    </div>
                ) : (
                    <div className={styles.cardWrapper}>
                        {!carouselToggle ? (
                            <div className={styles.wrapper}>
                                {cardsToRender.map((ele) => (
                                    <Card data={ele} type={type}/>
                                ))}
                            </div>
                        ) : (
                            <Carousel data={cardsToRender} renderComponent={(data) => <Card data={data} type={type}/>}/>
                        )}
                    </div>
                )
            }
        </div>
    )
}