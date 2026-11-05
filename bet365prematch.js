// CONFIG
const delayTimer = 300
const statisticWords = ['corner', 'yellow', 'foul', 'shot', 'goalscorers', 'player', 'card', 'goal scorer', 'promoted build a bet', 'booked', 'multi scorers']

// rrb-48 - default group
// sbz-52 - betboost
// rrb-3c4 - ai generated
// список будет пополняться 

let allMarkets = new Set()

// const BetContainer = document.querySelector('.cr-d')
let btnsTitles = document.querySelector('nav[class^="rct"]').querySelectorAll('div[class^="rct"] > button')


btnsTitles = [...btnsTitles].filter((el, i) => el.classList.length == 1 || i == 0)


for (let betTitle of btnsTitles) {
    betTitle.click()
    await new Promise(r => setTimeout(r, delayTimer))

    let betContainer = document.querySelector('.cr-d')
    for (let betGroup of betContainer) {
        let betGroupTitle = betGroup.querySelector('span[class^="rrb"]').textContent
        

    }
}