function isValidNumber(number) {
    if (typeof number !== 'number' || number === undefined) {
        return false;
    } else {
        return true;
    }
}

const myIterable = {};
myIterable[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,

        next() {

            if ((!isValidNumber(this.current) || !isValidNumber(this.last) || (this.last < this.current))) {
                throw new Error('Ошибка!');
            }

            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
};

for (let item of myIterable) {
    console.log(item);
}