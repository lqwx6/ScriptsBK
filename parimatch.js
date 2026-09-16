//  ОБЯЗАТЕЛЬНО СТРАНИЦУ НУЖНО ПРОКУРТИТЬ ВНИЗ, ИНАЧЕ НЕ ВСЕ МАРКЕТЫ СТАТИСТИКИ УДАЛЯТСЯ
// запускать 2 раза!

let allMarketGroups = document.querySelectorAll('[data-id="market-item"]');
let allMarketButtons = [] 
let statisticWords = ['грок', 'углов', 'жёлтые', 'фолы', 'удары', 'офсайд', 'аут', 'сейв', 'отбор', 'передач', 'кто забьет']
 
for (let marketGroup of [...allMarketGroups]) {
    // удаляем
    let marketGroupTitle = marketGroup.lastElementChild.firstElementChild.firstElementChild.firstElementChild.textContent.toUpperCase()
    
    if (statisticWords.some(word => marketGroupTitle.includes(word.toUpperCase()))) {
            console.log('УДАЛЕНО: ', marketGroupTitle, '\n')
            marketGroup.remove()
            continue
    }
    console.log('ОСТАЕТСЯ: ', marketGroupTitle, '\n')
 
    // раскрываем
    isOpened = marketGroup.lastElementChild.children.length
    
    if (isOpened == 1) {
        marketGroup.querySelectorAll('div[role=button]')[0].click()
    }

    // считаем все маркеты
    let buttons = marketGroup.lastElementChild.lastElementChild.querySelectorAll('[data-id="animated-odds-value"]')
    allMarketButtons.push(...buttons)
}


console.log(allMarketButtons)
console.log(allMarketButtons.length)