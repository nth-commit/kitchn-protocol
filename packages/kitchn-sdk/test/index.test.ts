import { initKitchn } from '../src'
import { createMockProvider } from './helpers/createMockProvider'

test('it works', () => {
  // Arrange
  const provider = createMockProvider()

  // Act
  const kitchn = initKitchn(provider)

  // Assert
  expect(kitchn).toBeDefined()
})
