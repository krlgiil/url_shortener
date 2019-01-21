import moment from 'moment';
import { Url } from '../connection';
import converter from '../../utils/Converter';

class UrlRepository {
  constructor() {
    this.client = Url;
  }

  findUrl(shortId) {
    return this.client.findOne({
      where: {
        shortId,
      },
    });
  }

  insertUrl(url) {
    return this.client.create({
      url,
      shortId: converter.generateHash(url),
      expiresAt: moment().add(process.env.EXPIRATION_DAY || 1, 'days'),
    });
  }
}

export default UrlRepository;
