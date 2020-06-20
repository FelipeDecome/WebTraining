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

        return `
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke-linecap="round">
                <circle cx="50%" cy="50%" r="46%" stroke-width="8%" style="stroke-dasharray: 100%;stroke-dashoffset: ${hour * hourPer}%"/>
                <circle cx="50%" cy="50%" r="37%" stroke-width="4%" style="stroke-dasharray: 100%;stroke-dashoffset: ${minutes * minSecPer}% "/>
                <circle cx="50%" cy="50%" r="31%" stroke-width="2%" style="stroke-dasharray: 100%;stroke-dashoffset: ${seconds * minSecPer}%"/>
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