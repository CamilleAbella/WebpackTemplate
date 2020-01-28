
const times = ( x, callback ) => { for(let i=0; i<x; i++) callback(x) }

class App {

    run( dev = false ){
        this.dev = dev
    }

    printCards( x ){
        const cards = document.createElement('div')
        cards.className = 'cards'
        times( x, t => {
            const card = document.createElement('div')
            card.className = 'card'
            cards.appendChild(card)
        })
        document.querySelector('main').appendChild(cards)
    }

}

export default new App()