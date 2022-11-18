import { deployAsyncToken } from '@kitchn/protocol/helpers/DeployHelpers'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { ethers } from 'hardhat'
import { Async } from '../../typechain-types'

export async function getSigner(): Promise<SignerWithAddress> {
  return (await ethers.getSigners())[0]!
}

export type KitchnProtocol = {
  asyncToken: Async
}

export async function deployKitchn(owner: string): Promise<KitchnProtocol> {
  const asyncToken = await deployAsyncToken(owner)
  return { asyncToken }
}
