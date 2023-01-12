import styled from '@emotion/styled';
import Image from 'next/image';
import 좋아요 from 'public/assets/icons/좋아요.png';
import InstaIcon from 'public/assets/icons/icons_insta.png';

const Organization = () => {
  return (
    <StOrganization>
      <StHeader>GIFT PROJECT</StHeader>
      <StBody>
        {DEVELOPERS.map(({ id, position, people }) => {
          return (
            <StComposition key={id}>
              <StPosition>{position}</StPosition>
              <StDeveloperBox>
                {people.map(({ id, name, insta }) => (
                  <StDeveloper key={id}>
                    <Image src={좋아요} alt="인원사진" width={60} height={60} />
                    <StInformation>
                      <StNickname>{name}</StNickname>
                      <Image src={InstaIcon} alt="인스타 아이콘" width={16} height={16} />
                    </StInformation>
                  </StDeveloper>
                ))}
              </StDeveloperBox>
            </StComposition>
          );
        })}
      </StBody>
      <StFooter>
        <StLicense>OPEN SOURCE LICENSE</StLicense>
        <StCopyright>이 어플리케이션에는 에스코어가 제공한 ‘에스코어 드림’ 폰트가 적용되어 있습니다.</StCopyright>
      </StFooter>
    </StOrganization>
  );
};

const DEVELOPERS: Developers[] = [
  {
    id: 0,
    position: 'Frontend Developer',
    people: [
      { id: 0, name: '김솔', insta: 'www.naver.com' },
      { id: 1, name: '이진혁', insta: 'www.naver.com' },
    ],
  },
  {
    id: 1,
    position: 'Backend Developer',
    people: [
      { id: 0, name: '김택수', insta: 'www.naver.com' },
      { id: 1, name: '박은송', insta: 'www.naver.com' },
    ],
  },
  {
    id: 2,
    position: 'Project manager / Designer',
    people: [{ id: 0, name: '송보현', insta: 'www.naver.com' }],
  },
];

const StOrganization = styled.div`
  width: 100%;
`;

const StHeader = styled.p`
  margin-bottom: 25px;
  color: ${({ theme }) => theme.color.grayFont};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const StBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StComposition = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

const StPosition = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.grayFont};
  font-size: 17px;
`;

const StDeveloperBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StDeveloper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const StNickname = styled.p`
  margin-right: 3px;
  padding-top: 2px;
  font-size: 15px;
`;

const StFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StLicense = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.grayFont};
`;

const StCopyright = styled.p`
  color: ${({ theme }) => theme.color.grayFont};
  font-size: 13px;
  line-height: 23px;
`;

export default Organization;
