import api from '../api';
import {IGetCotationsResponse} from './Cotations.structure';

class Cotations {
  async getCotations(): Promise<IGetCotationsResponse | false> {
    try {
      const {data} = await api.get<IGetCotationsResponse>(
        '/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL',
      );
      return data;
    } catch (error) {
      return false;
    }
  }
}

export default new Cotations();
