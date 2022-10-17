function factorialize(num) {
    if (num < 0) {
        return console.log('error')
    }
    if (num === 0 || num === 1) {
        num = 1
        return console.log(num)
    }
      for (i = num - 1; i >= 1; i--) {
      num *= i
    }
    return console.log(num)
  }
  factorialize(0);
