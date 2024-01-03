import styles from './homepage.module.css';

export default function NotFound() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.mainHeading}>404 Not Found</h2>
            <p>This page does not exist. Please check the URL and try again.</p>
        </div>
    );
}
