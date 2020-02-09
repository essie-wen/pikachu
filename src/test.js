import string from './css'

const player = {
    id: undefined,
    time: 100,
    ui: {
        demo:document.querySelector('#demo'),
        demo2:document.querySelector('#demo2')
    },
    events: {        
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    n:1,
    init: () => {
        player.ui.demo.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)  
        player.bindEvents()
    },    
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length-1) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop=player.ui.demo.scrollHeight       
    },
        
    play:() => {
        player.id = setInterval(player.run,player.time)
    },
        
    pause:() => {
        return window.clearInterval(player.id)
    },
        
    slow : () => {
        player.pause()
        player.time = 200
        player.play()
    },
        
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast : () => {
        player.pause()
        player.time = 0
        player.play()
    }  

}
player.init()


   /* 
    id=setInterval(run,time)
   等价于 id = setInterval(() => {
        run()
    },time) */