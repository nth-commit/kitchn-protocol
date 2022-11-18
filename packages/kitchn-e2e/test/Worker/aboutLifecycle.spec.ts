import { initKitchn } from '@kitchn/sdk'
import { initKitchnWorker } from '@kitchn/worker'
import { deployKitchn, getSigner } from '../Helpers/EthersHelpers'

describe('Worker', () => {
  it('can start and complete', async () => {
    // Arrange
    const owner = await getSigner()
    const provider = owner.provider!
    await deployKitchn(owner.address)

    // Act & Assert
    const kitchn = initKitchn(provider)
    const kitchnWorker = initKitchnWorker(kitchn)
    const abortController = new AbortController()
    const { done } = await kitchnWorker.start(abortController.signal)
    await done
  })
})
