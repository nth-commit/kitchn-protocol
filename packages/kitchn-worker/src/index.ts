import { Kitchn } from '@kitchn/sdk'

export type KitchnWorker = {
  /**
   * Notifies the protocol that the worker is ready to be assigned work. Graceful shutdown is really important right
   * now, as lazy workers will be punished to some degree before the protocol marks them as dead.
   * @param abort An abort signal that begins graceful shutdown.
   * @returns An object that contains a done promise. Once the done promise completes, then the protocol has been
   * notified that the worker is now inactive, and it is safe to end the process.
   */
  start(abort: AbortSignal): Promise<{ done: Promise<void> }>
}

/**
 * Creates a Kitchn Worker, responsible for executing jobs for the Kitchn Protocol.
 * @param _kitchn An instance of the Kitchn SDK
 */
export function initKitchnWorker(_kitchn: Kitchn): KitchnWorker {
  return {
    start: (abort) =>
      Promise.resolve({
        done: new Promise((resolve) => abort.addEventListener('abort', () => resolve())),
      }),
  }
}
