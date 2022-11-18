import { deployAsyncToken } from '@kitchn/protocol/helpers/DeployHelpers'
import { getSigner } from './Helpers/EthersHelpers'

it('hello, e2e', async () => {
  const signer = await getSigner()
  await deployAsyncToken(signer.address)
})
