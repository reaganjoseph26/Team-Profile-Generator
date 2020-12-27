const { TestScheduler } = require('jest')
const Intern = require('../lib/Intern.js')

test('expect intern to be an instance' ,()=> {
    const intern = new Intern()
    expect(typeof(intern)).toBe('object');
})

test('expect the value of school to be the same as constructor argument', ()=> {
    const school = 'X University'
    const intern = new Intern('joem', 3, 'joem@yahoo.com', school)
    expect(intern.school).toBe(school)
})

test('expect get school to be displayed as a string', ()=> {
    const intern = new Intern('joem', 3, 'joem@yahoo.com', 'X University')
    expect(intern.getSchool()).toBe(intern.school)
})

test('expect get role to be value of intern', ()=> {
    const intern = new Intern('joem', 3, 'joem@yahoo.com', 'X University')
    expect(intern.getRole()).toBe('Intern')
})