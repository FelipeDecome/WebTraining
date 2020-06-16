/** 
 * ! Preparar os Milisegundos nessa parte (* 1000 | * 100 | * 10)
 * ! Conversão de miliseconds para dia hora minutos e segundos aqui
 * ! Criar o timer 'countdown'e 'countTo'
 */
class Timer {

    static msPattern = {
        seconds: 1000,
        decSeconds: 100,
        cenSeconds: 10,
    }

    /**
     * 
     * @param {*} time: Objeto Time()
     */
    static createCountDown(time) {

        const conversion = Timer.msPattern.seconds

        const miliseconds = time * Timer.msPattern.seconds

        return setInterval(() => {

            // TODO Inicializar o contador
        }, conversion);
    }
}