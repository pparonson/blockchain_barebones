import * as R from 'ramda';

import Block from './block';

export default class Blockchain {
  constructor() {
    // a genesis block is created witht the new blockchain
    this.chain = [this.createGenesisBlock()];
  }

  //methods
  createGenesisBlock() {
    return new Block(
      0,
      Date.now(),
      {message: "genesisBlock"},
      "0"
    );
  }

  getLatestBlock() {
    //return block at last index
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    // set the index prop
    newBlock.index = this.chain.length;
    //set the previousHash prop
    newBlock.previousHash = this.getLatestBlock().hash;
    //recalc hash
    newBlock.hash = newBlock.calculateHash();
    //push the newBlock to the blockchain
    this.chain.push(newBlock);
  }
}

export {
  Blockchain
}
