import React from "react";
import styles from "./Searchbox.module.css";
import {ReactComponent as SearchIcon} from "../../assets/Searchicon.svg";
export default function SearchBox({ placeholder }){
    const onSubmit = (e) => {
        e.preventDefault();
        //Process some logic here in future
    }

    return(
        <>
            <form onSubmit={onSubmit} className={styles.searchContainer}>
            <input type="text" className={styles.searchBar} id="searchBar" placeholder={placeholder} />
            <button className={styles.searchButton} type="submit" >
                <SearchIcon />
            </button>
            </form>
        </>
    )
}