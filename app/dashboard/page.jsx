import History from "../ui/dashboard/history/history";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import styles from "../ui/dashboard/dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <History />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    );
    };

export default Dashboard;