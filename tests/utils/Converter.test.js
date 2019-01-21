import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import Converter from '../../src/utils/Converter';

chai.use(sinonChai);

describe('Converter Test', () => {
  describe('#encode', () => {
    it('should encode the id', (done) => {
      const result = Converter.encode('123');
      expect(result).to.be.eq('fdsfd');
    });
  });
  // describe('#decode', () => {
  //   it('should decode the short id', (done) => {
  //   });
  //   it('should not decode the short id', (done) => {});
  // });
});