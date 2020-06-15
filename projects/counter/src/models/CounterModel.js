class CounterModel {

    constructor(time) {

        this._timeToGo = time
        this._state = {
            running: false,
            intervalId: 0,
            time: {
                d: 0,
                h: 0,
                m: 0,
                s: 0,
                ms: 0
            }
        }

        this._observers = []
    }

    subscribeObs(obs) {

        this._observers.push(obs)
    }

    unsubscribeObs(obs) {

        this._observers = this._observers.filter(sub => sub !== obs)
    }

    _notifyAll(data) {

        this._observers.forEach(obs => obs(data))
    }

    start() {
        const interval = setInterval(() => {

            this._state.time.ms++
            this._state.time.s = Math.floor(this._state.time.ms / 1000)

            this._notifyAll(this._state.time)
        }, 1);
    }
}