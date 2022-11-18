import { expect } from 'chai'
import { deployAsyncToken } from '../../helpers/DeployHelpers'
import { getSigner } from '../Helpers/EthersHelpers'

it('has initial token drop', async () => {
  // Arrange
  const signer = await getSigner()

  // Act
  const asyncToken = await deployAsyncToken(signer.address)

  // Assert
  const expectedTotalSupply = 21_000_000
  expect(await asyncToken.totalSupply()).to.eq(expectedTotalSupply)
  expect(await asyncToken.balanceOf(signer.address)).to.eq(expectedTotalSupply)
})
