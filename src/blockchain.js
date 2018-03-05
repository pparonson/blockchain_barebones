import Block from "./block";
import Transaction from "./Transaction";

export default class Blockchain {
  constructor() {
    // upon initialization, create a genesis block
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.miningReward = 50;
  }

  //methods
  createGenesisBlock() {
    return new Block(
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

  // addBlock(newBlock) {
  //   // set the index prop
  //   newBlock.index = this.chain.length;
  //   //set the previousHash prop by obtaining the hash of getLatestBlock
  //   newBlock.previousHash = this.getLatestBlock().hash;
  //   //recalc hash
  //   // newBlock.hash = newBlock.calculateHash();
  //   newBlock.mineBlock(this.difficulty);
  //   //push the newBlock to the blockchain
  //   this.chain.push(newBlock);
  // }

  minePendingTransactions(rewardAddress) {
    // create a new block
    let newBlock = new Block(Date.now(), this.pendingTransactions);
    // calculateHash for the newBlock
    newBlock.mineBlock(this.difficulty);

    console.log("A new block has been successfully mined");
    this.chain.push(newBlock);

    // reset transaction mining array
    this.pendingTransactions = [
      // create new transactions array and give miner reward
      new Transaction(null, rewardAddress, this.miningReward)
    ];
  }

  createTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  getAddressBalance(address) {

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
