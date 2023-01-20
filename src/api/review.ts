import client from './client';
import API from './api';

const reviewAPI = {
  postReview: (data: any) => {
    return client.post(`${API.postReview}`, data);
  },
};

export default reviewAPI;