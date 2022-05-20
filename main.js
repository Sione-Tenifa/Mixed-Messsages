console.log("Hello World")

const fortuneMessage = {
    time: ['Today', 'Near future', 'Coming Months', 'Next Year' ],
    fortune: ['A beautiful, smart, and loving person will be coming into your life.', 'A dubious friend may be an enemy in camouflage.', 'A faithful friend is a strong defense.',
    'A fresh start will put you on your way.'],
    possibility: ['100%', '80%', '50%', '0%']
}

let randomTime = Math.floor(Math.random() * fortuneMessage.time.length)
let randomFortune = Math.floor(Math.random() * fortuneMessage.fortune.length)
let randomPoss = Math.floor(Math.random() * fortuneMessage.possibility.length)

const mixedMessage = () =>{
    console.log(fortuneMessage.fortune[randomFortune])
}

mixedMessage()