import styled from '@emotion/styled';

interface Props {
  text: string;
  selected: boolean;
  onClick?: () => void;
}

const Option = ({ text, selected, onClick }: Props) => {
  return (
    <StOption selected={selected} onClick={onClick}>
      {text}
    </StOption>
  );
};

const StOption = styled.button<{ selected: boolean }>`
  padding: 5px 10px;
  margin: 10px 5px;
  width: 100px;
  height: 50px;
  background-color: ${({ theme, selected }) => (selected ? theme.color.mainBlue : theme.color.lightGray)};
  color: ${({ theme, selected }) => (selected ? 'white' : theme.color.blackFont)};
  font-family: '에스코어드림Bold';
  font-size: 16px;
  border-radius: 50px;
  border: none;
  transition: all 0.2s;
`;

export default Option;
