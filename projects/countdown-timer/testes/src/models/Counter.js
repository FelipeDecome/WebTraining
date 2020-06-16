class Counter {

    constructor(initialDate, finalDate) {

        this._initialDate = initialDate
        this._finalDate = finalDate

        this._state = {
            d: 0,
            h: 0,
            m: 0,
            s: 0,
            ms: 0,
        }

        this._times = {
            d: 1000 * 60 * 60 * 24,
            h: 1000 * 60 * 60,
            m: 1000 * 60,
            s: 1000,
        }
    }

    getDifference() {

        const difference = Math.abs(this._initialDate - this._finalDate)

        this._state.d = Math.floor(difference / this._times.d)
        this._state.h = Math.floor((difference % this._times.d) / this._times.h)
        this._state.m = Math.floor(((difference % this._times.d) % this._times.h) / this._times.m)
        this._state.s = Math.floor((((difference % this._times.d) % this._times.h) % this._times.m) / this._times.s)
        this._state.ms = Math.floor((((difference % this._times.d) % this._times.h) % this._times.m) % this._times.s)

    }

}