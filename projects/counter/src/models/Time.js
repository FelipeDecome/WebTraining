/**
 * TODO Adicionar padrão Observer ao Objeto Time
 */

class Time {

    constructor(time) {

        this._timeInMiliseconds = time
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

        return this._timeInMiliseconds
    }

    // setTime(time) {

    //     this._timeInMiliseconds = time
    // }
}