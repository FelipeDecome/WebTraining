class Countdown extends Timer {

    constructor(initialValue, callback) {
        super(initialValue)

        this._callback = callback
    }

    init(time) {

        this._initialValue = new Time(this._startValue / time)

        this.start(time)
    }

    start(time) {

        const intervalId = setInterval(() => {

            this._initialValue.decrease()

            return this._callback(TimeHelper.parseTime(this._initialValue.getTime(), time))
        }, time);

        this._interval = {
            id: intervalId,
            time: time
        }
    }

}