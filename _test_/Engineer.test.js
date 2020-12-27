const { TestScheduler } = require("jest");
const Engineer = require('../lib/Engineer.js')


test('expect engineer to be a new instance', ()=> {
    const engineer = new Engineer()
    expect(typeof(engineer)).toBe('object')
})

test('expect a github username to be the same as constructor argument', ()=> {
    const github = 'reaganjoseph26'
    const engineer = new Engineer('joem', 3, 'joem@yahoo.com', github)
    expect(engineer.github).toBe(github)

})


// test('expect get role to be value of engineer', ()=> {
//     const engineer = new Engineer('joem', 3, 'joem@yahoo.com', 'reaganjoseph26')
//     expect(engineer.getRole()).tobe('Engineer)
// })