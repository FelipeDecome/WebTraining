/** 
 * DONE Preparar os Milisegundos nessa parte (* 1000 | * 100 | * 10)
 * ! Conversão de miliseconds para dia hora minutos e segundos aqui
 * ! Criar o timer 'countdown'e 'countTo'
 * ! Remover esse controller e criar o countdown diretamente apenas recebendo uma callback
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