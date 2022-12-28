import { Dispatch, SetStateAction } from 'react';

interface IProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

const FirstQuestion = (props: IProps) => {
  const { setNextValid } = props;

  return <div>첫번째 질문페이지</div>;
};

export default FirstQuestion;
