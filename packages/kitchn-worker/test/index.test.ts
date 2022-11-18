import { initKitchnWorker } from '../src'
import { createMockKitchn } from './helpers/createMockKitchn'

test('it works', () => {
  // Arrange
  const provider = createMockKitchn()

  // Act
  const kitchnWorker = initKitchnWorker(provider)

  // Assert
  expect(kitchnWorker).toBeDefined()
})
