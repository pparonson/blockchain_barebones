
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
