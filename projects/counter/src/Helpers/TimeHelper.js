class TimeHelper {

    /**
     * 
     * @param {*} time 
     * @returns {day, hour, minutes, seconds, miliseconds, timeInMiliseconds}
     */
    static parseTime(time) {

        /**
         * ? Value to parse
         */
        const timeInMiliseconds = time * 100

        /**
         * ? Value in Miliseconds of each
         */
        const timePatterns = {
            day: 1000 * 60 * 60 * 24,
            hour: 1000 * 60 * 60,
            minutes: 1000 * 60,
            seconds: 1000,
        }

        /** 
         * ? Days
         */
        const day = Math.floor(timeInMiliseconds / timePatterns.day)
        const moduleDay = timeInMiliseconds % timePatterns.day

        /**
         * ? Hours
         */
        const hour = Math.floor(moduleDay / timePatterns.hour)
        const moduleHour = moduleDay % timePatterns.hour

        /**
         * ? Minutes
         */
        const minutes = Math.floor(moduleHour / timePatterns.minutes)
        const moduleMinutes = moduleDay % timePatterns.minutes

        /**
         * ? Seconds
         */
        const seconds = Math.floor(moduleMinutes / timePatterns.seconds)
        const moduleSeconds = moduleMinutes % timePatterns.seconds

        /**
         * ? Miliseconds
         */
        const miliseconds = moduleSeconds

        return {
            day,
            hour,
            minutes,
            seconds,
            miliseconds
            // ! timeInMiliseconds
        }
    }

    static getTimeDifference(time1, time2) {

        return Math.abs(time1 - time2)
    }
}