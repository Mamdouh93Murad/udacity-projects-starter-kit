// TODO: import the url check function
// with reference to github repo && stackoverflow difference between toBeTruth/Truthy & toBeTruthy/Falsy
import checkURL from '../js/checkURL'
describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        // TODO: write your logic here
        expect(checkURL).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        // TODO: write your logic here
        expect(checkURL("www.google.com")).toBeTruthy();
    })

    test('Testing the checkUrl function return true for valid url', () => {
        // TODO: write your logic here
        expect(checkURL("meow")).toBeFalsy();
    })
})
