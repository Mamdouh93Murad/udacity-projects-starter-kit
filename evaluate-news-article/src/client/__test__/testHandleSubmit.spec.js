// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import handleSubmit from '../js/formHandler'
import 'babel-polyfill'

describe('Client Test', () => {
    // TODO: add your test cases to test client
    test('Testing the HandleSubmit function defined or not', () => {
      // TODO: write your logic here
      expect(handleSubmit).toBeDefined();
  })
})
