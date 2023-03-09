import { useCallback, useEffect, useState } from "react";
import CountDown from "../CountDown/CountDown";
import styles from "./InfoSection.module.scss";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const InfoSection = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let futureDate = new Date(2023, 4, 24, 11, 30, 0);
  let year = futureDate.getFullYear();
  let month = months[futureDate.getMonth()];
  let date = futureDate.getDate();
  let hour = futureDate.getHours();
  let minute = futureDate.getMinutes();
  let weekday = weekdays[futureDate.getDay()];

  let futureTime = futureDate.getTime();

  const handleRemainingTime = useCallback(() => {
    const today = new Date().getTime();
    const t = futureTime - today;

    //convert ms to days, hours, minutes
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate days, hours, minutes from ms to go, using modulo to get the remaning ms (t % oneDay ==> remaning ms after t keeps deviding for the same number oneDay)
    setDays(Math.floor(t / oneDay));
    setHours(Math.floor((t % oneDay) / oneHour)); //let hours = Math.floor((t - oneDay * days) / oneHour)
    setMinutes(Math.floor((t % oneHour) / oneMinute)); // let minutes = Math.floor((t - oneDay * days - oneHour * hours) / oneHour)
    setSeconds(Math.floor((t % oneMinute) / 1000));
  }, [futureTime]);

  useEffect(() => {
    handleRemainingTime();
  }, [handleRemainingTime]);

  return (
    <div className={styles.infoContainer}>
      <div>
        <h2>Old Iphone Giveaway</h2>
        <h4>
          Giveaway Ends On {weekday}, {month} {date} {year} {hour}:{minute}am
        </h4>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit molestiae cum libero atque ut voluptate qui consectetur
          aliquid incidunt voluptatem quos, dolore, non commodi quaerat aliquam
          eligendi, quisquam totam blanditiis.
        </p>
      </div>

      <CountDown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
};

export default InfoSection;
