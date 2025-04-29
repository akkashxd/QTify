import React from "react";
import styles from "./HeroSection.module.css";
import headphone from "../../assets/headphone.png"

export default function HeroSection(){
    return(
        <>
            <div className={styles.container}>
                <div>
                    <h1>100 Thousand Songs, ad-free</h1>
                    <h1>Over thousands podcast episodes</h1>
                </div>
                <div>
                <img src={headphone} className={styles.heroImage} alt="headphone" />
                </div>
            </div>
        </>
    )
}