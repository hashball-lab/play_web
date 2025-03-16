import * as ethers from "ethers";
import hashballAbi from "../json/hashball_json"
import playballAbi from "../json/playball_json"
import drawwinnerAbi from "../json/drawwinner_json"
import committeesAbi from "../json/committees_json"


import {makeAutoObservable} from 'mobx'

class Wallet{
    
    providers = new ethers.providers.JsonRpcProvider('https://sepolia.unichain.org')
    
    hashballcontractAddress = "0xDA8ffCa53c250be8b8a0d326aeAAeDcfE9a75e71"
    committeescontractAddress = "0xCa099E626888D055A0557a4733dcb71a2aDb3604"
    playballcontractAddress = "0xe1a3220c2c03857766CfB3b6BB6c2701F032437d"
    drawwinnercontractAddress = "0x1744fe84653d5071E4edaCac129F2AaD65fEd60C"

    chainID = 1301

    hashballcontract = new ethers.Contract(this.hashballcontractAddress, hashballAbi, this.providers)
    playballcontract = new ethers.Contract(this.playballcontractAddress, playballAbi, this.providers)
    drawwinnercontract = new ethers.Contract(this.drawwinnercontractAddress, drawwinnerAbi, this.providers)
    committeescontract = new ethers.Contract(this.committeescontractAddress, committeesAbi, this.providers)
    
    constructor(){
        makeAutoObservable(this)
    }
    reset() {
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        this.signer = this.provider.getSigner()
        this.hashballcontract = new ethers.Contract(this.hashballcontractAddress, hashballAbi, this.signer)
        this.playballcontract = new ethers.Contract(this.playballcontractAddress, playballAbi, this.signer)
        this.drawwinnercontract = new ethers.Contract(this.drawwinnercontractAddress, drawwinnerAbi, this.signer)
        this.committeescontract = new ethers.Contract(this.committeescontractAddress, committeesAbi, this.signer)
      }

}
const UnichainWallet = new Wallet()

export {UnichainWallet}