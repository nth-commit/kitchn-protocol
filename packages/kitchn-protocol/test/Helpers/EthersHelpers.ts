import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { ethers } from 'hardhat'

export async function getSigner(): Promise<SignerWithAddress> {
  return (await ethers.getSigners())[0]!
}
