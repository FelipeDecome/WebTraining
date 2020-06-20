/**
 * DONE Adicionar padrão Observer ao Objeto Time
 */

class Time {

    constructor(time) {

        this._timeInMiliseconds = time

        this._observers = []
    }

    increase(value) {

        this._timeInMiliseconds += value

        this.notifyAll()
        return this
    }

    decrease(value) {

        this._timeInMiliseconds -= value

        this.notifyAll()
        return this
    }

    getTime() {

        return this._timeInMiliseconds
    }

    subscribeObs(obs) {

        if (this._observers.includes(obs)) {
            return
        }

        return this._observers.push(obs)
    }

    notifyAll() {

        return this._observers.forEach(obs => obs(this.getTime()))
    }
}