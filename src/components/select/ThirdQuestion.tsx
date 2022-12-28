import { Dispatch, SetStateAction } from 'react';

interface IProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

const ThirdQuestion = (props: IProps) => {
  const { setNextValid } = props;

  return <div>세번째 질문 페이지</div>;
};

export default ThirdQuestion;
