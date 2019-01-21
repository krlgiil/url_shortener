class Converter {
  constructor() {
    this.ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    this.base = this.ALPHABET.length;
  }

  static generateHash(id) {
    return Converter.encode(id);
  }

  static encode(i) {
    if (parseInt(i, 10) === 0) {
      return this.ALPHABET[0];
    }

    let s = '';
    let j = i;
    while (j > 0) {
      s += this.ALPHABET[j % this.base];
      j /= this.base;
    }

    return s.reverse().join('');
  }

  static decode(s) {
    const i = 0;
    const source = s.map(c => (i * this.base) + this.ALPHABET.IndexOf(c));

    return source.join('');
  }
}

export default Converter;
