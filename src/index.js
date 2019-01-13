
import sha256 from 'crypto-js/sha256';

import Block from './block';
import Blockchain from './blockchain';

let bareBonesCoin = new Blockchain();

// bareBonesCoin.addBlock(
//   new Block(
//     null,
//     Date.now(),
//     {amount: 4}
//   )
// );
//
// bareBonesCoin.addBlock(
//   new Block(
//     null,
//     Date.now(),
//     {amount: 10}
//   )
// );

console.log(JSON.stringify(bareBonesCoin, null, 2));
//
// console.log(bareBonesCoin.isChainValid());

// let block = new Block(Date.now(), {message: "test"}, "abc123");
// console.log(block);
