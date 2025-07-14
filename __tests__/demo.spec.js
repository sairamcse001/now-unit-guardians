module.exports = {
 
  add,
 
  multiply,
 
  subtract
 
};

 
const mathUtil = require('../src/demo');
describe('mathUtil', () => {
  it('should add two numbers', () => {
    mathUtil.add(2, 3);
  });
});
