class Converter {
  constructor() {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    this.base = this.alphabet.length;
  }

  generateHash(id) {
    return this.encode(id);
  }

  encode(id) {
    if (parseInt(id, 10) === 0) {
      return this.alphabet[0];
    }

    const res = [];
    let i = id;
    while (i > 0) {
      res.push(`${this.alphabet[i % this.base]}`);
      i = Math.floor(i / this.base);
    }

    return res.reverse().join('');
  }

  decode(shortId) {
    let i = 0;
    const tab = shortId.split('');
    for (let ind = 0; ind < tab.length; ind += 1) {
      i = (i * this.base) + this.alphabet.indexOf(tab[ind]);
    }

    return i;
  }
}

export default Converter;
