class Converter {
  ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');

  static generateHash(id) {
    return Converter.encode(id);
  }

  static encode(i) {
    if (i == 0) {
      return ALPHABET[0];
    }

    s = '';
    base = ALPHABET.length;
    while (i > 0) {
      s += ALPHABET[i % base];
      i = i / base;
    }

    return s.reverse().join('');
  }

  static decode(s) {
      let i = 0;
      const source = s.map(c => (i * base) + ALPHABET.IndexOf(c));

      return source.join('');
  }
}

export default Converter;