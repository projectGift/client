import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';

const Slider = ({ options, state, setState }: SliderProp) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (option: number) => {
    if (sliderRef.current) sliderRef.current.scrollTop = option * 70;
  };

  useEffect(() => {
    const setOptionKey = () => {
      if (sliderRef.current) {
        const optionKey: number = Math.round(sliderRef.current.scrollTop / 70);
        if (0 < optionKey && optionKey < options.length + 1) setState(optionKey);
      }
    };
    if (sliderRef.current) sliderRef.current.addEventListener('scroll', setOptionKey);
    return () => sliderRef.current?.removeEventListener('scroll', setOptionKey);
  }, []);

  return (
    <StSlider ref={sliderRef}>
      <StWrapper>
        {options.map(({ key, option }) => {
          const currentDiff: number = Math.abs(key - state) <= 2 ? Math.abs(key - state) : 2;
          return (
            <StOption selected={state === key} key={key} onClick={() => handleScroll(key)} currentDiff={currentDiff}>
              {option}
            </StOption>
          );
        })}
      </StWrapper>
    </StSlider>
  );
};

const StSlider = styled.div`
  position: relative;
  margin: 20px 0;
  height: 350px;
  overflow: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const StWrapper = styled.div`
  padding: 210px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StOption = styled.button<{ selected: boolean; currentDiff: number }>`
  padding: 5px 10px;
  margin: 10px;
  width: 120px;
  height: 50px;
  background-color: ${({ theme, selected }) => (selected ? theme.color.mainBlue : theme.color.lightGray)};
  color: ${({ theme, selected }) => (selected ? 'white' : theme.color.blackFont)};
  font-family: '에스코어드림Bold';
  font-size: 16px;
  border-radius: 50px;
  border: none;
  scroll-snap-align: center;
  scroll-behavior: smooth;
  transition: all 0.2s;
  opacity: ${({ currentDiff }) => 0.9 / currentDiff};
  scale: ${({ currentDiff }) => (currentDiff === 2 ? 0.8 : currentDiff === 1 ? 0.9 : 1)};
`;

export default Slider;
