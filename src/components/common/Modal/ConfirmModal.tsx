import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useResetRecoilState } from 'recoil';
import { modalState } from '@src/state/modal';
import { pageIdxState } from '@src/state/pageIdx';
import { selectedState } from '@src/state/selected';

const ConfirmModal = () => {
  const router = useRouter();

  const resetPageIdx = useResetRecoilState(pageIdxState);

  const resetSelected = useResetRecoilState(selectedState);

  const closeModal = useResetRecoilState(modalState);

  const recommendAgain = () => {
    resetPageIdx();
    resetSelected();
    closeModal();
    router.push('/select');
  };

  return (
    <StConfirmModal>
      <StHeader>
        만족도 평가가 완료되었습니다! <br />
        지금 바로 선물을 추천받으시겠어요?
      </StHeader>
      <StFooter>
        <StConfirmBtn onClick={recommendAgain}>확인</StConfirmBtn>
        <StCancelBtn onClick={closeModal}>취소</StCancelBtn>
      </StFooter>
    </StConfirmModal>
  );
};

const StConfirmModal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  width: 90%;
  background: white;
  border-radius: 10px;
`;

const StHeader = styled.p`
  font-size: 18px;
  text-align: center;
  line-height: 30px;
`;

const StFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const StConfirmBtn = styled.button`
  width: 45%;
  height: 40px;
  color: ${({ theme }) => theme.color.mainBlue};
  background: white;
  border: ${({ theme }) => `1px solid ${theme.color.mainBlue}`};
  border-radius: 5px;
  font-size: 16px;
`;

const StCancelBtn = styled(StConfirmBtn)`
  color: white;
  background: ${({ theme }) => theme.color.mainBlue};
`;

export default ConfirmModal;
