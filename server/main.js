import g from '../imports/tools'
import stream from '../imports/streamer'

let people = [
    { name: 'Pedro' },
    { name: 'Anna' },
    { name: 'Lee' },
    { name: 'Jack' },
    { name: 'Paul' },
    { name: 'Jin' },
    { name: 'Julia' },
    { name: 'Nikky' },
    { name: 'Sam' },
    { name: 'Ted' },
]

setInterval(() => {
    people.push({
        name:'Nick' + new Date().getTime() 
    })
    stream.emit('people', people)
}, 1000 * 10)

Meteor.methods({
    getPeopleFromServer: function () {
        return people
    }
});