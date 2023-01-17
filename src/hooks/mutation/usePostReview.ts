import reviewAPI from '@src/api/review';
import { modalState } from '@src/state/modal';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useResetRecoilState } from 'recoil';

const usePostReview = () => {
  const closeModal = useResetRecoilState(modalState);

  return useMutation((data: IReview) => reviewAPI.postReview(data), {
    onSuccess: (data: AxiosResponse) => {
      console.log(data);
      closeModal();
    },
  });
};

export default usePostReview;
