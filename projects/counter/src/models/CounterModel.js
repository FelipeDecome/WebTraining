class CounterModel {

    constructor(time) {

        this._timeToGo = time
        this._state = {
            running: false,
            msIntervalId: 0,
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

    _notifyAll() {

        this._observers.forEach(obs => obs(this._state.time))
    }

    start() {
        this._notifyAll(this._state.time)

        const interval = setInterval(() => {
            this._state.time.ms++

            // Segundos
            if (this._state.time.ms === 100) {
                this._state.time.ms = 0
                this._state.time.s++

                // Minutos
                if (this._state.time.s === 60) {
                    this._state.time.s = 0
                    this._state.time.m++

                    // Horas
                    if (this._state.time.m === 60) {
                        this._state.time.m = 0
                        this._state.time.h++

                        if (this._state.time.h === 24) {
                            this._state.time.h = 0
                            this._state.time.d++
                        }
                    }
                }
            }

            this._notifyAll()
        }, 10);

        this._state.intervalId = interval
        this._state.running = true
    }

    pause() {

        if (this._state.running === true) {

            clearInterval(this._state.intervalId)
        }
    }

    stop() {

        this.pause()
        this._state.time = {
            d: 0,
            h: 0,
            m: 0,
            s: 0,
            ms: 0
        }

        this._notifyAll()
    }
}