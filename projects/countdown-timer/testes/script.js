const date1 = new Date('2020/06/13 18:48:00')

const date2 = new Date('2020/06/14 20:12:00')

const counter = CounterFactory.createCounter(date1, date2)
counter.getDifference()

console.log(counter)