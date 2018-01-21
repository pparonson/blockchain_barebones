import * as R from 'ramda';

import * as math from './sum';

console.log(`Answer: ${math.add(2, 1)}`);

/*
* index: index of this block in the chain
* timestamp: timestamp of block creation
* data: details of the transaction
* previousHash: hash of the previous block
* hash: hash of this block
*/
class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = '';
  }

  // methods
  calculateHash() {
    // ca
  }
}
