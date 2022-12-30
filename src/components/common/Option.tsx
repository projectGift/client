import styled from '@emotion/styled';

interface Props {
  text: string;
}

const Option = ({ text }: Props) => {
  return <StOption>{text}</StOption>;
};

const StOption = styled.button`
  padding: 5px 10px;
`;

export default Option;
