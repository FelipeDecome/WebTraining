/** 
 * DONE Preparar os Milisegundos nessa parte (* 1000 | * 100 | * 10)
 * ! Conversão de miliseconds para dia hora minutos e segundos aqui
 * ! Criar o timer 'countdown'e 'countTo'
 */
class TimerController {

    constructor() {
        this._msPattern = {
            seconds: 1000,
            decSeconds: 100,
            cenSeconds: 10,
        }
    }

    /**
     * 
     * @param {*} time: Objeto Time()
     */
    createCountdown(time, view) {

        const conversion = this._msPattern.seconds

        const timeInMiliseconds = time * this._msPattern.seconds

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