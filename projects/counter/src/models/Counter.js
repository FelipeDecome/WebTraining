class CounterModel {


    /* 
     ! Modelo pro tempo (Recebe em ms e separa por s, m, h e d) DONE
     TODO Funções pra gerenciar o incremendo ou decremento no tempo
     TODO Controller pra gerenciar a contagem e verificar quando o timeout tiver acabado (Testar verificacao com timeout) 
     */
    constructor(time) {

        this._intervalId = 0

        this._counter = 0
        this._observers = []
    }

    subscribeObs(obs) {

        this._observers.push(obs)
    }

    unsubscribeObs(obs) {

        this._observers = this._observers.filter(sub => sub !== obs)
    }

    _notifyAll() {

        this._observers.forEach(obs => obs(this._state.time))
    }

    start() {

        const intervalId = setInterval(() => {

            this._counter++

            this._notifyAll(this._counter)
        }, 10);
    }

    pause() {

        clearInterval(this._intervalId)
    }

    stop() {

        this.pause()
        this._counter = 0
    }
}