class Time {

    constructor() {

        this._day = 0
        this._hour = 0
        this._minutes = 0
        this._seconds = 0
        this._miliseconds = 0
        this._timeInMiliseconds = 0

    }

    getTime() {

        return {
            day: this._day,
            hour: this._hour,
            minutes: this._minutes,
            seconds: this._seconds,
            miliseconds: this._miliseconds,
            timeInMiliseconds: this._timeInMiliseconds
        }
    }

    getTimeToString() {

        return `${this._day}:${this._hour}:${this._minutes}:${this._seconds}:${this._miliseconds}`
    }

    setTime(time) {

        const {
            day,
            hour,
            minutes,
            seconds,
            miliseconds,
            timeInMiliseconds
        } = TimeHelper.parseTime(time)

        this._day = day
        this._hour = hour
        this._minutes = minutes
        this._seconds = seconds
        this._miliseconds = miliseconds
        this._timeInMiliseconds = timeInMiliseconds
    }
}