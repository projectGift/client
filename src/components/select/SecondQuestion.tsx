import { Dispatch, SetStateAction } from 'react';

interface IProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

const SecondQuestion = (props: IProps) => {
  const { setNextValid } = props;

  return <div>두번째 질문 페이지</div>;
};

export default SecondQuestion;
