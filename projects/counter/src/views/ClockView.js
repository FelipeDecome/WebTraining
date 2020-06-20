class ClockView {

    constructor(htmlElement) {

        this._container = htmlElement

        console.log(htmlElement.childNodes)
    }

    _template(model) {

        const {
            hour,
            minutes,
            seconds
        } = TimeHelper.parseTime(model)

        const minSecPer = 1.66666666667
        const hourPer = 8.33333333333

        const circlesArray = {
            hour: 400 / 100 * 46 * Math.PI * 2,
            minutes: 400 / 100 * 37 * Math.PI * 2,
            seconds: 400 / 100 * 31 * Math.PI * 2
        }

        const circlesOffset = {
            hour: circlesArray.hour / 100 * (Math.abs(hour - 12) * hourPer),
            minutes: circlesArray.minutes / 100 * (Math.abs(minutes - 60) * minSecPer),
            seconds: circlesArray.seconds / 100 * (Math.abs(seconds - 60) * minSecPer),
        }

        return `
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke-linecap="round">
                <circle cx="50%" cy="50%" r="46%" stroke-width="8%" style="stroke-dasharray: ${circlesArray.hour}px; stroke-dashoffset: ${circlesOffset.hour}px"/>
                <circle cx="50%" cy="50%" r="37%" stroke-width="4%" style="stroke-dasharray: ${circlesArray.minutes}px; stroke-dashoffset: ${circlesOffset.minutes}px"/>
                <circle cx="50%" cy="50%" r="31%" stroke-width="2%" style="stroke-dasharray: ${circlesArray.seconds}px; stroke-dashoffset: ${circlesOffset.seconds}px"/>
            </g>
        </svg>

        <div id="time-container">
            <span>${hour.toString().length > 1 ? hour : '0' + hour}:${minutes.toString().length > 1 ? minutes : '0' + minutes}:${seconds.toString().length > 1 ? seconds : '0' + seconds}</span>
        </div>

        `
    }

    update(model) {

        return this._container.innerHTML = this._template(model)
    }
}