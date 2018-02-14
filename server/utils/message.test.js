const expect = require('expect');
const {generateMessage} = require('./message');
describe('generateMessage', () => {
  it('should generate a new Message object', () => {
    let from = 'wess'
    let text = 'Hala Madrid !'
    var res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);

  });
});
