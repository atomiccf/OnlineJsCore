function isValidNumber(number) {
   return isFinite(number) && !isNaN(number);
}

const myIterable = {from: 'aaa', to: 4};

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
         }

            return {done: true};
      }
   }
};

for (let item of myIterable) {
   console.log(item);
}
