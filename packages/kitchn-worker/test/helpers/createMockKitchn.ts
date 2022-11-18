import { Kitchn } from '@kitchn/sdk'

export function createMockKitchn(): Kitchn {
  // Just mock the functions that we need
  const kitchn: Partial<Kitchn> = {}

  return kitchn as Kitchn
}
