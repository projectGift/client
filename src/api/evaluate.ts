import client from './client';
import API from './api';

const evaluateAPI = {
  postEvaluation: (data: Evaluation) => {
    return client.post(`${API.postEvaluation}`, data);
  },
};

export default evaluateAPI;
