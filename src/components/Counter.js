import { useEffect, useState } from "react";

export default function Counter() {
  const [clockData, setClockData] = useState({
    dd: 0,
    hh: 0,
    mm: 0,
    ss: 0
  });

  useEffect(() => {
    const sec = 1000,
      min = sec * 60,
      hour = min * 60,
      day = hour * 24;

    const clockInterval = setInterval(() => {
      const end = new Date("May 05, 2022 12:00:00").getTime();
      const current = new Date().getTime();
      let remaining = end - current;

      if (remaining < 0) {
        clearInterval(clockInterval);
        setClockData({
          dd: 0,
          hh: 0,
          mm: 0,
          ss: 0
        });
        return;
      }

      const dd = Math.floor(remaining / day);
      const hh = Math.floor((remaining % day) / hour);
      const mm = Math.floor((remaining % hour) / min);
      const ss = Math.floor((remaining % min) / sec);

      setClockData({ dd, hh, mm, ss });
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  const countDownEnded =
    clockData.dd === 0 && clockData.hh === 0 && clockData.mm === 0 && clockData.ss === 0;

  return (
    <div className="flex-w flex-c-m cd100 p-b-33">
      {countDownEnded ? (
        <div className="txt-center">
          <h2>Countdown ended.</h2>
          <p className="">Welcome to our website</p>
          <button className="flex-c-m size4 s2-txt3 m-t-30 mao-btn1 trans-01 where1">Click Here</button>
        </div>
      ) : (
        <>
          <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
            <span className="l2-txt1 p-b-9 days">{clockData.dd}</span>
            <span className="s2-txt1">Days</span>
          </div>

          <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
            <span className="l2-txt1 p-b-9 hours">{clockData.hh}</span>
            <span className="s2-txt1">Hours</span>
          </div>

          <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
            <span className="l2-txt1 p-b-9 minutes">{clockData.mm}</span>
            <span className="s2-txt1">Minutes</span>
          </div>

          <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
            <span className="l2-txt1 p-b-9 seconds">{clockData.ss}</span>
            <span className="s2-txt1">Seconds</span>
          </div>
        </>
      )}
    </div>
  );
}
