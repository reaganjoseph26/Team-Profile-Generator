const { TestScheduler } = require("jest")
const Manager = require("../lib/Manager")

test('expect manager to be an instance', ()=> {
    const manager = new Manager()
    expect(typeof(manager)).toBe('object');
});

test('expect the office number to be the same as the constructor argument', ()=> {
    const officeNumber = 24
    const manager = new Manager('joem', 3, 'joem@yahoo.com', officeNumber)
    expect(manager.officeNumber).toBe(officeNumber)
})

test('expect get role to be a value of manager', ()=>{
    const manager = new Manager('joem', 3, 'joem@yahoo.com', 24)
    expect(manager.getRole()).toBe('Manager')
})
