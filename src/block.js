import * as R from 'ramda';
import sha256 from 'crypto-js/sha256';

/*
* index: index of this block in the chain
* timestamp: timestamp of block creation
* data: details of the transaction
* previousHash: hash of the previous block
* hash: hash of this block
*/
export default class Block {
  constructor(index = 0, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  //methods
  calculateHash() {
    return sha256(
      this.index +
      this.timestamp +
      this.previousHash +
      JSON.stringify(this.data)
    ).toString();
  }

  toString() {
    return `Block -
      Timestamp: ${this.timestamp},
      Data: ${this.data},
      PreviousHash: ${this.previousHash.substring(0, 6)}
      Hash: ${this.hash.substring(0, 6)}`;
  }
}
