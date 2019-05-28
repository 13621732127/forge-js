const hasher = require('../../lib/hasher/sha2');

const testVectors = {
  '': {
    224: '0XD14A028C2A3A2BC9476102BB288234C415A2B01F828EA62AC5B3E42F',
    256: '0XE3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
    384: '0X38B060A751AC96384CD9327EB1B1E36A21FDB71114BE07434C0CC7BF63F6E1DA274EDEBFE76F65FBD51AD2F14898B95B',
    512: '0XCF83E1357EEFB8BDF1542850D66D8007D620E4050B5715DC83F4A921D36CE9CE47D0D13C5D85F2B0FF8318D2877EEC2F63B931BD47417A81A538327AF927DA3E',
  },
  abcd: {
    224: '0XA76654D8E3550E9A2D67A0EEB6C67B220E5885EDDD3FDE135806E601',
    256: '0X88D4266FD4E6338D13B845FCF289579D209C897823B9217DA3E161936F031589',
    384: '0X1165B3406FF0B52A3D24721F785462CA2276C9F454A116C2B2BA20171A7905EA5A026682EB659C4D5F115C363AA3C79B',
    512: '0XD8022F2060AD6EFD297AB73DCC5355C9B214054B0D1776A136A669D26A7D3B14F73AA0D0EBFF19EE333368F0164B6419A96DA49E3E481753E7E96B716BDCCB6F',
  },
  1234: {
    224: '0X99FB2F48C6AF4761F904FC85F95EB56190E5D40B1F44EC3A9C1FA319',
    256: '0X03AC674216F3E15C761EE1A5E255F067953623C8B388B4459E13F978D7C846F4',
    384: '0X504F008C8FCF8B2ED5DFCDE752FC5464AB8BA064215D9C5B5FC486AF3D9AB8C81B14785180D2AD7CEE1AB792AD44798C',
    512: '0XD404559F602EAB6FD602AC7680DACBFAADD13630335E951F097AF3900E9DE176B6DB28512F2E000B9D04FBA5133E8B1C6E8DF59DB3A8AB9D60BE4B97CC9E81DB',
  },
  'ABC!234*': {
    224: '0X20BA36781F2F26749DD6364F52554B9EC2A2B88512E6F9C27979802D',
    256: '0XEBD1B0F4D006B3AAFA93D86AAD9C8A3C59A736A60D6F464F51E54EF61043467A',
    384: '0X2A86C218F7B896485EA39F5758999C932A212CFF0309ACB8E8621CAD682CA1B35CC41154AFB4A1BF050D97E2A0EC7C14',
    512: '0X14BEA590E28F4EE0C16336887F7E3C3E6AA744F37E09F067655E6326B905ACBD7DBE48656FBC0C71BE0C7A4776B174E380E14EF336D35ED7027E5D9C6256F947',
  },
};

describe('#sha2', () => {
  Object.keys(testVectors.abcd).forEach(length => {
    Object.keys(testVectors).forEach(key => {
      test(`should hash value: ${key} at length ${length}`, () => {
        const fn = `hash${length}`;
        expect(hasher[fn](key, 1).toUpperCase()).toEqual(testVectors[key][length]);
      });
    });
  });
});
