/** 
 * DONE Preparar os Milisegundos nessa parte (* 1000 | * 100 | * 10)
 */
class TimerController {

    /**
     * 
     * @param {*} time: Objeto Time()
     */
    createCountdown(time, view) {

        const timeInMiliseconds = time

        return new Countdown(timeInMiliseconds, (time) => {

            const {
                day,
                hour,
                minutes,
                seconds,
                miliseconds
            } = time

            view.innerText = `${day} : ${hour} : ${minutes} : ${seconds} : ${miliseconds}`
        })
    }
}