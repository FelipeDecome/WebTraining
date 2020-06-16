class Time {

    constructor() {

        this._timeInMiliseconds = 0
    }

    increase() {

        this._timeInMiliseconds++
        return this
    }

    decrease() {

        this._timeInMiliseconds--
        return this
    }

    getTime() {

        return TimeHelper.parseTime(this._timeInMiliseconds)
    }

    setTime(time) {

        this._timeInMiliseconds = time
    }
}