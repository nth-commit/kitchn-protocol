import { deployKitchn, getSigner } from './Helpers/EthersHelpers'

it('hello, e2e', async () => {
  const signer = await getSigner()
  await deployKitchn(signer.address)
})
