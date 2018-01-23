
import sha256 from 'crypto-js/sha256';

// import * as math from './sum';
import Block from './block';
import Blockchain from './blockchain';

// console.log(`Answer: ${math.add(2, 1)}`);

let bareBonesCoin = new Blockchain();

bareBonesCoin.addBlock(
  new Block(
    null,
    Date.now(),
    {amount: 4}
  )
);

bareBonesCoin.addBlock(
  new Block(
    null,
    Date.now(),
    {amount: 10}
  )
);

console.log(JSON.stringify(bareBonesCoin, null, 2));
//checking if current hash and previous hash are valid
console.log(`Blockchain is valid: ${bareBonesCoin.isChainValid()}`);
//changed value of data prop
bareBonesCoin.chain[1].data = {amount: 100};
//checking if current hash and previous hash are valid
console.log(bareBonesCoin.chain[1].hash, bareBonesCoin.chain[1].data);
console.log(`Blockchain is valid: ${bareBonesCoin.isChainValid()}`);
bareBonesCoin.chain[1].hash = bareBonesCoin.chain[1].calculateHash();
console.log(bareBonesCoin.chain[1].hash, bareBonesCoin.chain[1].data);
console.log(`Blockchain is valid: ${bareBonesCoin.isChainValid()}`);
console.log(JSON.stringify(bareBonesCoin, null, 2));
