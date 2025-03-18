import styles from "../styles/PricingSection.module.css"

export default function PricingSection() {

    return (
        <div className={styles.pricingSection}>
            <div className={styles.pricingContainer}>
                <div className={styles.pricingCard}>
                    <h2 className={styles.pricingTitle}>Basic</h2>
                    <p className={styles.pricingPrice}>$10</p>
                    <ul className={styles.pricingList}>
                        <li>10GB Storage</li>
                        <li>10 Users</li>
                        <li>10 Websites</li>
                        <li>24/7 Support</li>
                    </ul>
                    <button className={styles.pricingButton}>Choose Plan</button>
                    </div>
                    <div className={styles.pricingCard}>
                    <h2 className={styles.pricingTitle}>Pro</h2>
                    <p className={styles.pricingPrice}>$20</p>
                    <ul className={styles.pricingList}>
                        <li>20GB Storage</li>
                        <li>20 Users</li>
                        <li>20 Websites</li>
                        <li>24/7 Support</li>
                    </ul>
                    <button className={styles.pricingButton}>Choose Plan</button>
                    </div>
                    <div className={styles.pricingCard}>
                    <h2 className={styles.pricingTitle}>Enterprise</h2>
                    <p className={styles.pricingPrice}>$30</p>
                    <ul className={styles.pricingList}>
                        <li>30GB Storage</li>
                        <li>30 Users</li>
                        <li>30 Websites</li>        
                        <li>24/7 Support</li>
                    </ul>
                    <button className={styles.pricingButton}>Choose Plan</button>
                </div>
            </div>

        </div>

    );

}