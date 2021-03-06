const { toBase58, toUint8Array, toBuffer } = require('@arcblock/forge-util');
const signer = require('../../lib/signer/ed25519');

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const messageHex =
  '0x15D0014A9CF581EC068B67500683A2784A15E1F68057E5E37AAF3A0F58F3C43F083D6A5630130399D4E5003EA191FDE30849';
const signatureHex =
  '0x321EE8262407BF091F16ED190A3074339EBDF956B3924A9CF29B86A366C9570C72C6A8D8363705182D5A99FAF152C617FD89D291C9D944F2A95DF57019303200';
const messageUtf8 = 'this is a message !587++sdF';
const signatureUtf8 =
  '0x4C6CC2FEFEB4CE33FA88684AACEDF653A4F33621890055EAACA82C5952C407CF26EB786B6330AFE7A09FA725B7DFEBF792B24AC93A8E1A447BE029E45762390F';

describe('#ed25519', () => {
  test('should create key pair', () => {
    const pair = signer.genKeyPair();
    expect(pair.publicKey).toBeTruthy();
    expect(pair.secretKey).toBeTruthy();
  });

  test('should support getPublicKey', () => {
    const { publicKey: pk1, secretKey: sk1 } = signer.genKeyPair();
    const pk2 = signer.getPublicKey(sk1);
    expect(pk1).toEqual(pk2);
  });

  test('should gen public key same as elixir', () => {
    const pk2 = signer.getPublicKey(sk);
    expect(pk2.toUpperCase()).toEqual(pk.toUpperCase());
  });

  test('should sign hex message', () => {
    const signature2 = signer.sign(messageHex, sk);
    expect(signature2.toUpperCase()).toEqual(signatureHex.toUpperCase());
  });

  test('should verify hex message', () => {
    const result = signer.verify(messageHex, signatureHex, pk);
    expect(result).toEqual(true);
  });

  test('should sign utf8 message', () => {
    const signature2 = signer.sign(messageUtf8, sk);
    expect(signature2.toUpperCase()).toEqual(signatureUtf8.toUpperCase());
  });

  test('should verify utf8 message', () => {
    const result = signer.verify(messageUtf8, signatureUtf8, pk);
    expect(result).toEqual(true);
  });

  test('should sign message in different formats and get same output', () => {
    const signatures = [
      signer.sign(messageHex, sk),
      signer.sign(toBuffer(messageHex), sk),
      signer.sign(toUint8Array(messageHex), sk),
      signer.sign(toBase58(messageHex), sk),
    ];

    signatures.forEach(x => {
      expect(x.toUpperCase()).toEqual(signatureHex.toUpperCase());
    });
  });

  test('should verify message in different formats and get same output', () => {
    const signatures = [
      signer.verify(toBuffer(messageHex), signatureHex, pk),
      signer.verify(toBuffer(messageHex), signatureHex, toBuffer(pk)),
      signer.verify(toBuffer(messageHex), toBuffer(signatureHex), pk),
      signer.verify(toBuffer(messageHex), toBuffer(signatureHex), toBuffer(pk)),

      signer.verify(toUint8Array(messageHex), signatureHex, pk),
      signer.verify(toUint8Array(messageHex), toUint8Array(signatureHex), pk),
      signer.verify(toUint8Array(messageHex), toUint8Array(signatureHex), toUint8Array(pk)),
      signer.verify(messageHex, toUint8Array(signatureHex), toUint8Array(pk)),

      signer.verify(toBase58(messageHex), signatureHex, pk),
      signer.verify(toBase58(messageHex), toBase58(signatureHex), pk),
      signer.verify(toBase58(messageHex), signatureHex, toBase58(pk)),
      signer.verify(messageHex, toBase58(signatureHex), toBase58(pk)),
      signer.verify(messageHex, signatureHex, toBase58(pk)),
    ];

    signatures.forEach(x => {
      expect(x).toEqual(true);
    });
  });
});
