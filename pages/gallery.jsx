import DefaultLayout from "../Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/gallery.module.scss";

const Gallery = () => {
    const [img, setImg] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos?_limit=25")
            .then((res) => setImg(res.data));
    }, []);

    return (
        <DefaultLayout>
            <div className={styles.text}>
                <h3>Ecco la mia gallery</h3>
            </div>
            <div className={styles.img}>
                {img.length && (
                    img.map((gallery) => (
                        <div className={styles.galleryImg} key={gallery.title}>
                            <Image
                                src={gallery.url}
                                alt={gallery.title}
                                width="300"
                                height="300"
                            />
                            <p>{gallery.title}</p>
                        </div>
                    ))
                )}
            </div>
        </DefaultLayout>
    )
}

export default Gallery;