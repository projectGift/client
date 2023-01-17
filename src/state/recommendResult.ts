import { atom } from 'recoil';

export const recommendResultState = atom<RecommendResult[]>({
  key: 'recommendResultState',
  default: [
    {
      id: 185,
      product_name: '삼성 정품 C타입 초고속 충전기 45W(1M 케이블 포함) EP-TA845',
      product_price: '27800.00',
      product_review_count: 8980,
      product_url:
        'https://smartstore.naver.com/dmacshop/products/5360329376?NaPm=ct%3Dlceoxlnc%7Cci%3D778d794540843433123c56b93c09753ae053962e%7Ctr%3Dslsl%7Csn%3D243297%7Chk%3D14560f2dcaa863c9b2c31e65ed051d3ed0a56379',
      thumbnail:
        'https://shop-phinf.pstatic.net/20220914_246/166314626438438ma2_JPEG/64282163075872927_488836196.jpg?type=o1000',
    },
    {
      id: 195,
      product_name: 'COX CK420 LED 게이밍 기계식 키보드 블랙 갈축 넌클릭',
      product_price: '38900.00',
      product_review_count: 10479,
      product_url:
        'https://smartstore.naver.com/coxstore/products/4492829755?NaPm=ct%3Dlcg494g8%7Cci%3De493b3460d0475b914f6587e2627fcddd0372d01%7Ctr%3Dslbrc%7Csn%3D180724%7Chk%3D07c31f2d722164a6bfed483228a2f800acd07deb',
      thumbnail:
        'https://shop-phinf.pstatic.net/20220527_53/16536187720535uxFD_JPEG/54754660761501121_424807791.jpg?type=o1000',
    },
    {
      id: 181,
      product_name: '갤러플 아이폰 맥세이프 카드지갑 카드케이스',
      product_price: '18000.00',
      product_review_count: 6926,
      product_url:
        'https://smartstore.naver.com/galapple/products/5257555010?NaPm=ct%3Dlcej86l4%7Cci%3D6b3e44d55b4f01d895b39fb5695a0b993e3216a7%7Ctr%3Dslsl%7Csn%3D2680548%7Chk%3D79194545538ed8f6eacc157a6e272cdcb76caaaf',
      thumbnail:
        'https://shop-phinf.pstatic.net/20221121_286/1669012940150OSdMo_JPEG/29973873068779054_1174318981.jpg?type=o1000',
    },
  ],
});
