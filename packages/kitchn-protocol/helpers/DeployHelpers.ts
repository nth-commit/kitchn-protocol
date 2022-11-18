import { ethers } from 'hardhat'
import { Async } from '../typechain-types'

export async function deployAsyncToken(seedAccount: string): Promise<Async> {
  const factory = await ethers.getContractFactory('Async')
  const instance = await factory.deploy(seedAccount)
  await instance.deployed()
  return instance
}
