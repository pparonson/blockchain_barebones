import * as R from 'ramda';

import Block from './block';

export default class Blockchain {
  constructor() {
    // upon initialization, create a genesis block
    this.chain = [this.createGenesisBlock()];
  }

  //methods
  createGenesisBlock() {
    return new Block(
      0, //index
      Date.now(), //datetime
      //data obj
      {
        message: "genesisBlock"
      },
      "0" //previousHash
    );
  }

  getLatestBlock() {
    //return block at last index of the chain
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    // set the index prop
    newBlock.index = this.chain.length;
    //set the previousHash prop by obtaining the hash of getLatestBlock
    newBlock.previousHash = this.getLatestBlock().hash;
    //recalc hash of current block
    newBlock.hash = newBlock.calculateHash();
    //push the newBlock to the blockchain
    this.chain.push(newBlock);
  }

  isChainValid() {
    let currentBlockHash = this.getLatestBlock().previousHash;
    let previousBlockHash = this.chain[this.getLatestBlock().index - 1].hash;
    // let previousBlockHash = this.chain[this.chain.length - 2].hash
    console.log(`Current: ${currentBlockHash}, \nPrevious: ${previousBlockHash}`);
    if (currentBlockHash === previousBlockHash) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
}

export {
  Blockchain
}
