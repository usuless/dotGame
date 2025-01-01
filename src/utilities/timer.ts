import { useTimer } from "vue-timer-hook";

export const setTimer = (seconds: number) => {
    let date = new Date()

    date.setSeconds(date.getSeconds() + seconds);

    //@ts-ignore
    const timer = useTimer((date));

    return timer
}