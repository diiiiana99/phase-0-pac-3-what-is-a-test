const { name, height, message } = require("../index.js");

const name = "Susan"
const height = "less than 40"
const message = `${name} is ${height} to be less than`;
 

 describe('Height', () => {
    it('is less than 40', () => {
      expect(height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(message).toInclude(name)
      expect(message).toInclude(height)
    })
  })
})
*/
