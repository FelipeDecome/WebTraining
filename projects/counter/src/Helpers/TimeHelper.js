class TimeHelper {

    /**
     * ? Value in Miliseconds of each
     */
    static timePatterns = {
        day: 1000 * 60 * 60 * 24,
        hour: 1000 * 60 * 60,
        minutes: 1000 * 60,
        seconds: 1000,
    }

    /**
     * 
     * @param {*} time 
     * @returns {day, hour, minutes, seconds, miliseconds, timeInMiliseconds}
     */
    static parseTime(time) {

        /**
         * ? Value to parse
         */
        const timeInMiliseconds = time

        /** 
         * ? Days
         */
        const day = Math.floor(timeInMiliseconds / TimeHelper.timePatterns.day)
        const moduleDay = timeInMiliseconds % TimeHelper.timePatterns.day

        /**
         * ? Hours
         */
        const hour = Math.floor(moduleDay / TimeHelper.timePatterns.hour)
        const moduleHour = moduleDay % TimeHelper.timePatterns.hour

        /**
         * ? Minutes
         */
        const minutes = Math.floor(moduleHour / TimeHelper.timePatterns.minutes)
        const moduleMinutes = moduleDay % TimeHelper.timePatterns.minutes

        /**
         * ? Seconds
         */
        const seconds = Math.floor(moduleMinutes / TimeHelper.timePatterns.seconds)
        const moduleSeconds = Math.floor(moduleMinutes % TimeHelper.timePatterns.seconds)

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

    static getTimeLeft(time) {

        return time - Date.now()
    }

    static timeToMiliseconds(time) {

        const timeObj = {
            hour: time.getHours() * TimeHelper.timePatterns.hour,
            minutes: time.getMinutes() * TimeHelper.timePatterns.minutes,
            seconds: time.getSeconds() * TimeHelper.timePatterns.seconds,
        }

        return timeObj.hour + timeObj.minutes + timeObj.seconds
    }
}