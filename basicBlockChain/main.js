const sha256 = require('crypto-js/sha256');

class Block{
  constructor(index, timeStamp, data, previousHash = ""){
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calcHash();
    this.nonce = 0;
  }

  calcHash(){
    return sha256(this.index + this.previousHash + this.timeStamp + JSON.stringify(this.data) + this.nonce).toString();
  }

  mineBlock(difficulty){
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
      this.nonce++;
      this.hash = this.calcHash();
    }
    console.log("Block Mined: " + this.hash);
  }
}

class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
  }
  createGenesisBlock(){
    return new Block(0, Date(), "GenesisBlock", "0");
  }
  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }
  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }
   isChainValid(){
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if(currentBlock.hash !== currentBlock.calcHash()){
        return false;
      }

      if(currentBlock.previousHash !== previousBlock.hash){
        return false;
      }
    }
    return true
  }
}
let testChain = new Blockchain();

console.log("Minin block 1...");
testChain.addBlock(new Block(1, Date(), {"name": "block 1",
                                        "DOB": Date(),
                                        "otherData": "was born"
                                      }));

console.log("Minin block 2...");
testChain.addBlock(new Block(2, Date(), {"name": "block 2",
                                          "date": Date(),
                                          "otherData": "more data"
                                     }));
