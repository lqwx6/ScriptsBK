// перед запуском скрипта, перевести страницу на английский и прокрутить вниз чтобы перевод прогрузился на странице.

let allMarketGroups = document.getElementsByClassName('t-doubleBlink-exited-active')
let statisticWords = ['TOP SCORER', 'corner', 'YELLOW CARD', 'SHOTS ON GOAL', 'foul', 'offside']


// удаляем информационные дубли 
let trash = document.querySelectorAll('div[class^="CommunityStats-styled__OpportunitiesStats-"')
if (trash[0] != undefined) trash[0].remove()
trash = document.getElementsByClassName('react-horizontal-scrolling-menu--wrapper carousel--wrapper')
if (trash[0] != undefined) trash[0].remove()


// удаляем стату
for (let marketGroup of [...allMarketGroups]) {
    let marketGroupTitle = marketGroup.firstElementChild.firstElementChild.firstElementChild.textContent.toUpperCase()

    if (statisticWords.some(word => marketGroupTitle.includes(word.toUpperCase()))) {
        console.log('УДАЛЕНО: ', marketGroupTitle, '\n')
        marketGroup.remove()
        continue
    }

    console.log('ОСТАЕТСЯ: ', marketGroupTitle, '\n')
}

// дораскрываем исходы
let allShowAllButtons = document.querySelectorAll('[data-atid="button-toggle-exact-score"]');
for (let showAllButton of [...allShowAllButtons]) {
    showAllButton.click()
}

const allMarketButtons = document.querySelectorAll('div[class^="BetButton-styled__BetButton-"')

console.log(allMarketButtons)
console.log(allMarketButtons.length)