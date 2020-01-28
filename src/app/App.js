
const times = ( x, callback ) => { for(let i=0; i<x; i++) callback(x) }

class App {

    run( dev = false ){
        
    }

    printCards( x ){
        times( x, t => {
            const card = document.createElement('div')
            card.className = 'card'
            document.querySelector('main').appendChild(card)
        })
    }

}

export default new App()