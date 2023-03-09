import styles from "./CountDown.module.scss";

const CountDown = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.countdownContainer}>
      <div className={styles.countdown}>
        <h4>{days}</h4>
        <span>Days</span>
      </div>
      <div className={styles.countdown}>
        <h4>{hours}</h4>
        <span>Hours</span>
      </div>
      <div className={styles.countdown}>
        <h4>{minutes}</h4>
        <span>Mins</span>
      </div>
      <div className={styles.countdown}>
        <h4>{seconds}</h4>
        <span>Secs</span>
      </div>
    </div>
  );
};

export default CountDown;
