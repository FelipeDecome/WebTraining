class Timer {

    constructor(initialValue) {

        this._startValue = initialValue
        this._initialValue = 0
        this._interval = {
            id: 0,
            counterSpeed: 0
        }
    }

    /**
     * Implementar nas filhas
     */
    start(time) {

        throw new Error("Método 'start' precisa ser implementado")
    }

    /** 
     * ! Descontinuada 
    continue () {

        return this._interval.id !== 0 ?
            this.start(this._interval.time) :
            'Nenhum timer está pausado';
    } */

    /** 
     * ! Descontinuada
    pause() {

        clearInterval(this._interval.id)
    } */

    stop() {

        this._initialValue = 0
        clearInterval(this._interval.id)
    }
}