import Block from './block';

export default class Blockchain {
  constructor() {
    // upon initialization, create a genesis block
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
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
    //recalc hash
    // newBlock.hash = newBlock.calculateHash();
    newBlock.mineBlock(this.difficulty);
    //push the newBlock to the blockchain
    this.chain.push(newBlock);
  }

  isChainValid() {
    //exclude genesisBlock from loop
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // verify hash of currentBlock
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      // verify previousHash
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false
      }
    }
    // if all hashes are verified
    return true;
  }
}

export {
  Blockchain
}
