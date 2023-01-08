import { useState } from 'react';
import styled from '@emotion/styled';
import Headline from '../../common/Headline';
import Category from './Category';
import { CATEGORY } from '../../../mocks/CATEGORY';

const RelationInfo = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [selected, setSelected] = useState<string>('');

  return (
    <StDetailInfo>
      <StHeader>
        <Headline text="상대방을 더 자세하게 알려주세요." />
      </StHeader>
      <StContents>
        {CATEGORY.map(({ key, category, option }) => (
          <Category
            key={key}
            category={category}
            option={option}
            open={open}
            setOpen={setOpen}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </StContents>
    </StDetailInfo>
  );
};

const StDetailInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StContents = styled.div`
  padding-top: 38px;
  width: 100%;
`;

export default RelationInfo;
