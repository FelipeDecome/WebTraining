/**
 * DONE Modelo pro tempo (Recebe em ms e separa por s, m, h e d) DONE
 * DONE Funções pra gerenciar o incremendo ou decremento no tempo
 * TODO Controller pra gerenciar a contagem e verificar quando o timeout tiver acabado (Testar verificacao com timeout) 
 */

class Timer {

    constructor(initialValue) {

        this._startValue = initialValue
        this._initialValue = new Time(initialValue)
        this._intervalId = 0
    }

    /**
     * Implementar nas filhas
     */
    start() {}

    stop() {

        clearInterval(this._intervalId)
    }

    reset() {

        this._initialValue.setTime(this._startValue)
        clearInterval(this._intervalId)
    }
}