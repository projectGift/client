import Head from 'next/head';

interface SEOProps {
  title: string;
}

const SEO = (props: SEOProps) => {
  const { title } = props;

  return (
    //서비스명 정해지면 @@ 지우고 서비스명 기입
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="@@" />
      <meta property="og:title" content="@@" />
      <meta property="og:description" content="매번 고민되는 선물, @@에서 추천받아보세요!" />
      <meta property="og:locale" content="ko_KR" />
    </Head>
  );
};

export default SEO;
