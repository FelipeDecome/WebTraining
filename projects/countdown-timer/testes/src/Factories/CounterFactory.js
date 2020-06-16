class CounterFactory {

    static createCounter(initialDate, finalDate) {

        return new Counter(initialDate, finalDate);
    }
}