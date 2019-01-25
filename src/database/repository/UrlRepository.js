import moment from 'moment';
import { Url } from '../connection';
import Converter from '../../utils/Converter';

class UrlRepository {
  constructor() {
    this.client = Url;
    this.converter = new Converter();
  }

  findUrl(shortId) {
    return this.client.findOne({
      where: {
        id: this.converter.decode(shortId),
      },
    });
  }

  insertUrl(url) {
    return this.client.create({
      url,
      expiresAt: moment().add(process.env.EXPIRATION_DAY || 1, 'days'),
    });
  }
}

export default UrlRepository;
