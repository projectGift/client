import styled from '@emotion/styled';
import Image from 'next/image';
import TojiImg from '../../../../../public/assets/images/image_toji.png';
import InstaIcon from '/public/assets/icons/icons_insta.png';
import GithubIcon from '/public/assets/icons/icons_github.png';

const Organization = () => {
  const handleOpenNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <StOrganization>
      <StHeader>GIFT PROJECT</StHeader>
      <StBody>
        {DEVELOPERS.map(({ id, position, people }) => {
          return (
            <StComposition key={id}>
              <StPosition>{position}</StPosition>
              <StDeveloperBox>
                {people.map(({ id, name, imgUrl, contact }) => (
                  <StDeveloper
                    key={id}
                    onClick={() => {
                      handleOpenNewTab(contact);
                    }}>
                    <StImgWrapper>
                      <StProfileImg
                        src={name === '송보현' ? TojiImg : imgUrl}
                        alt="인원사진"
                        width={120}
                        height={120}
                      />
                    </StImgWrapper>
                    <StInformation>
                      <StNickname>{name}</StNickname>
                      <Image
                        src={name === '송보현' ? InstaIcon : GithubIcon}
                        alt="인스타 아이콘"
                        width={16}
                        height={16}
                      />
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
      {
        id: 0,
        name: '김솔',
        contact: 'https://github.com/Solrasido55',
        imgUrl: 'https://ca.slack-edge.com/TH0U6FBTN-U03RARH33QF-05b8fcf210c7-512',
      },
      {
        id: 1,
        name: '이진혁',
        contact: 'https://github.com/zinukk',
        imgUrl: 'https://ca.slack-edge.com/TH0U6FBTN-U03S42BBL3B-bc1666f79a7e-512',
      },
    ],
  },
  {
    id: 1,
    position: 'Backend Developer',
    people: [
      {
        id: 0,
        name: '김택수',
        contact: 'https://github.com/robinkim93',
        imgUrl: 'https://ca.slack-edge.com/TH0U6FBTN-U03S42CF1R7-6e5bd2eab91b-512',
      },
      {
        id: 1,
        name: '박은송',
        contact: 'https://github.com/smileeunsong',
        imgUrl: 'https://ca.slack-edge.com/TH0U6FBTN-U03RRCTCQAW-6081adc61c7c-512',
      },
    ],
  },
  {
    id: 2,
    position: 'Project manager / Designer',
    people: [
      {
        id: 0,
        name: '송보현',
        contact: 'https://instagram.com/look_at_meng?igshid=YmMyMTA2M2Y=',
        imgUrl: 'https://ca.slack-edge.com/TH0U6FBTN-U03S42CF1R7-6e5bd2eab91b-512',
      },
    ],
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
  cursor: pointer;
`;

const StImgWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.gray};
`;

const StProfileImg = styled(Image)`
  border-radius: 50%;
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
