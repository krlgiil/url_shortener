import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import Converter from '../../src/utils/Converter';

chai.use(sinonChai);

describe('Converter Test', () => {
  const converter = new Converter();

  describe('#encode', () => {
    it('should encode the id', () => {
      expect(converter.encode('123')).to.be.eq('b9');
      expect(converter.encode('56789')).to.be.eq('oV7');
      expect(converter.encode('987654')).to.be.eq('ei54');
    });
  });

  describe('#decode', () => {
    it('should decode the short id', () => {
      expect(converter.decode('b9')).to.be.eq(123);
      expect(converter.decode('oV7')).to.be.eq(56789);
      expect(converter.decode('ei54')).to.be.eq(987654);
    });
  });
});