import Head from 'next/head';

interface IProps {
  title: string;
}

const SEO = (props: IProps) => {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="이거어때?" />
      <meta property="og:title" content="이거어때?" />
      <meta property="og:description" content="매번 고민되는 선물, '이거어때?'에서 추천받아보세요!" />
      <meta property="og:locale" content="ko_KR" />
    </Head>
  );
};

export default SEO;
