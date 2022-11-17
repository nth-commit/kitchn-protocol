import { createKitchnWorker } from '../src'
import { createMockProvider } from './helpers/createMockProvider'

test('it works', () => {
  // Arrange
  const provider = createMockProvider()

  // Act
  const kitchnWorker = createKitchnWorker(provider)

  // Assert
  expect(kitchnWorker).toBeDefined()
})
