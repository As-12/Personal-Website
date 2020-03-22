class bro {
  constructor() {
    this.name = 'John';
  }
}

export { bro };

function minutesToSeconds(minute) {
  let time = str.split(' ');

  if (time.length != 2) {
    return false;
  }

  let result = 0;
  for (let i = 0; i != time.length; i += 1) {
    const parsed = parseInt(time[i]);
    if (isNaN(parsed) || parsed >= 60 || parsed < 0) {
      return false;
    }

    result += Math.pow(60, i + 1) * parsed;
  }
  return result;
}
