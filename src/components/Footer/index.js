import { useEffect } from "react";
import styles from "./Footer.module.css";

function Footer() {

    useEffect(() => {
        const currentYear = document.getElementById('year');
        currentYear.innerHTML = new Date().getFullYear();
        currentYear.style.color = 'red';
    })

    return (
        <footer className={styles.footer}>
            <h2>RandomFlix &copy; <span id="year"></span> - Prof. <a href="https://www.youtube.com/@ProfessorEdsonMaia" target="_blank">Edson Maia</a></h2>
        </footer>
    );
}

export default Footer;
