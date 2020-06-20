class Countdown extends Timer {

    constructor(initialValue, view) {

        super(initialValue)
        this._view = view
    }

    init(counterSpeed) {

        this._initialValue = new Time(this._startValue)
        this._interval.counterSpeed = counterSpeed

        this._initialValue.subscribeObs(this._view)

        this._initialValue.notifyAll()
        this.start()
    }

    start() {

        const counterSpeed = this._interval.counterSpeed
        const time = this._initialValue

        const intervalId = setInterval(() => {

            time.decrease(counterSpeed)
        }, counterSpeed);

        this._interval.id = intervalId
    }

}