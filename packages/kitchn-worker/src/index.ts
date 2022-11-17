import { Provider } from '@ethersproject/abstract-provider'
import { initKitchn } from '@kitchn/sdk'

export type KitchnWorker = {
  /**
   * Notifies the protocol that the worker is ready to be assigned work.
   */
  start(): Promise<void>
  /**
   * Notifies the protocol that the worker should stop being assigned work. It is best practice to call this method to
   * limit collateral losses (lazy workers are punished). In the future, an auto-stop service will become available.
   */
  stop(): Promise<void>
}

/**
 * Creates a Kitchn Worker, responsible for executing jobs in the Kitchn Protocol.
 *
 * @param ethersProvider
 * @returns An instance of the Kitchn SDK, acting on behalf of the given provider.
 */
export function createKitchnWorker(ethersProvider: Provider): KitchnWorker {
  initKitchn(ethersProvider) // Test

  return {
    start: () => Promise.resolve(),
    stop: () => Promise.resolve(),
  }
}
