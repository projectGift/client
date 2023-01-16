import { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useResetRecoilState } from 'recoil';
import { modalState } from '@src/state/modal';
import Organization from './Organization';
import Review from './Review';
import SubmitIcon from '/public/assets/icons/icons_submit.png';
import ActiveSubmitIcon from '/public/assets/icons/icons_activeSubmit.png';

const ReviewModal = () => {
  const closeModal = useResetRecoilState(modalState);

  const [isReview, setisReview] = useState<boolean>(true);

  const [options, setOptions] = useState<number[]>([]);

  const [comment, setComment] = useState<string>('');

  const canSubmit = options.length > 0 && comment.length > 0;

  const pageHandler = () => {
    return isReview ? setisReview(false) : setisReview(true);
  };

  return (
    <StReviewModal>
      <StBody isReview={isReview}>
        {isReview ? (
          <Review
            options={options}
            setOptions={setOptions}
            comment={comment}
            setComment={setComment}
            pageHandler={pageHandler}
          />
        ) : (
          <Organization />
        )}
      </StBody>
      <StFooter>
        <Image
          src={canSubmit || !isReview ? ActiveSubmitIcon : SubmitIcon}
          alt={canSubmit || !isReview ? '활성화 아이콘' : '비활성화 아이콘'}
          width={65}
          height={65}
          onClick={() => {
            canSubmit && isReview ? closeModal() : pageHandler();
          }}
        />
      </StFooter>
    </StReviewModal>
  );
};

const StReviewModal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  width: 90%;
  background: white;
  border-radius: 10px;
`;

const StBody = styled.div<{ isReview: boolean }>`
  width: 100%;
  height: ${({ isReview }) => (isReview ? '65vh' : '80vh')};
  overflow: auto;
`;

const StFooter = styled.div`
  position: absolute;
  left: 50%;
  bottom: -73px;
  transform: translate(-50%, -50%);
`;

export default ReviewModal;
