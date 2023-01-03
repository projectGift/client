import styled from '@emotion/styled';

interface Props {
  text: string;
  selected: boolean;
}

const Option = ({ text, selected }: Props) => {
  return <StOption selected={selected}>{text}</StOption>;
};

const StOption = styled.button<{ selected: boolean }>`
  padding: 5px 10px;
  width: 100px;
  height: 50px;
  background-color: ${({ selected }) => (selected ? '#456F87' : '#f0f0f0')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-weight: 600;
  font-size: 16px;
  border-radius: 50px;
  border: none;
`;

export default Option;
