class Countdown extends Timer {

    constructor(initialValue, callback) {
        super(initialValue)

        this._callback = callback
    }

    start(time) {

        this._intervalId = setInterval(() => {

            this._initialValue.decrease()

            this._callback(TimeHelper.parseTime(this._initialValue.getTime()))
        }, time);
    }

}