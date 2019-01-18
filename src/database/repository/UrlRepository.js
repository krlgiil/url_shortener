import moment from 'moment';
import Connection, { Url } from '../connection';
import converter from '../../utils/Converter';

class UrlRepository {
  findUrl(shortId) {
    return Url.findOne({
      where: {
        shortId
      }
    });
  }

  insertUrl(url) {
    return Url.create({
      url,
      shortId: converter.generateHash(url),
      expiresAt: moment().add(process.env.EXPIRATION_DAY || 1, 'days'),
    });
  }
}

export default UrlRepository;