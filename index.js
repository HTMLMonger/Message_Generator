'use strict'

let words = {
    adjectives:[ 'adorable', 'attractive', 'beautiful', 'cruel', 'clever', 'tasty','attractive','bald','beautiful','chubby','clean','dazzling','drab','elegant','fancy','flabby','glamorous','gorgeous','handsome','tall','magnificent','muscular','plain','plump','quaint','scruffy','shapely','short','skinny','stocky','ugly','unkempt','unsightly' ],
    nouns:['cat', 'dog', 'hamster', 'bird', 'rat', 'snake', 'spider', 'horse', 'guinea pig','teacher','doctor','chef','student','pilot','firefighter','lawyer','mechanic','engineer','farmer'] ,
    verbs:['always','usually','often','sometimes','rarely','never','hardly ever','occasionally','seldom','generally','frequently','normally','once','twice']
}
let firstWord = words.adjectives[(Math.floor(Math.random()* words.adjectives.length-1))];
let secondWord = words.nouns[(Math.floor(Math.random()* words.nouns.length-1))];
let thirdWord = words.verbs[(Math.floor(Math.random()* words.verbs.length-1))];
let fourthWord = words.adjectives[(Math.floor(Math.random()* words.adjectives.length-1))];


console.log(`You are ${firstWord}, and there is also a ${secondWord} who thinks he is ${thirdWord} ${fourthWord} `)