import client from './client';
import API from './api';

const loadingAPI = {
  getProductCount: () => {
    return client.get(`${API.getProductCount}`);
  },
};

export default loadingAPI;
