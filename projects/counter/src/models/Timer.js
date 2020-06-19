/**
 * DONE Modelo pro tempo (Recebe em ms e separa por s, m, h e d)
 * DONE Funções pra gerenciar o incremendo ou decremento no tempo
 * DONE Controller pra gerenciar a contagem
 * TODO Verificar quando o timeout tiver acabado (Testar verificacao com timeout) 
 */

class Timer {

    constructor(initialValue) {

        this._startValue = initialValue
        this._initialValue = 0
        this._interval = {
            id: 0,
            time: 0
        }
    }

    /**
     * Implementar nas filhas
     */
    start(time) {

        throw new Error("Método 'start' precisa ser implementado")
    }

    continue () {

        return this._interval.id !== 0 ?
            this.start(this._interval.time) :
            'Nenhum timer está pausado';
    }

    pause() {

        clearInterval(this._interval.id)
    }

    stop() {

        this._initialValue = 0
        clearInterval(this._interval.id)
    }
}