import client from './client';
import API from './api';

const suggestAPI = {
  postSelected: (data: Selected) => {
    return client.post(`${API.suggest}`, data);
  },
};

export default suggestAPI;
