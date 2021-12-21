


const url_string = window.location.href
const url = new URL(url_string)

const payoutNavLink = document.querySelector('[href="https://pool.gravitsapa.space/payouts"]')
const statNavLink = document.querySelector('[href="https://pool.gravitsapa.space/wallet"]') 

let lw = getLocalWallet()
let tw = url.searchParams.get("tw")
let currentPath = url.pathname
//console.log("current path", currentPath)

//console.log("lw ", lw)
//console.log("tw ", tw)

const hasWallet = new Boolean( lw || tw )

//console.log("haswallet" ,hasWallet)

if (tw) {
    setLocalWallet(tw)
    switchHref(tw, payoutNavLink, statNavLink)

} else if (getLocalWallet()) {
    lw = getLocalWallet()
    switchHref(lw, payoutNavLink, statNavLink)
    switch (currentPath){
        case "/payouts":
            loadLocalWallet()
        break
        case "/wallet":
            loadLocalWallet()
        break
        case "/founds":
            foundsChangeHref()
            foundsMarkYourBlock()
        break
    }
} 

function foundsChangeHref(){
    var foundsLinks = document.querySelectorAll("td > a")
    foundsLinks.forEach(u => {
        var founderWallet = new URL(u.getAttribute("href")).pathname.split("/")[2]
        u.removeAttribute("target")
        u.setAttribute("href", "https://pool.gravitsapa.space/wallet?tw="+founderWallet )
    })
}

function foundsMarkYourBlock(){
    for (const a of document.querySelectorAll("td > a")) {
        if (a.textContent.includes(lw)) {
          a.setAttribute("style","color:#f00")
        }
      }
}

function loadLocalWallet (){
    if (window.confirm("Перейти в сохраненный кошелек?")) {
        window.location.href = url_string +"?tw="+ lw;
    }
}

function setLocalWallet(w){
    localStorage.setItem("wal", w)

    /* 
    chrome.storage.local.set({wal: w}, function() {
        console.log('Value is set to ' + tw)
    }) */
}

function getLocalWallet() {
    
    return localStorage.getItem("wal")
    
    /*chrome.storage.local.get(['wal'], function (result) {
        console.log('Value in local.storage is ' + JSON.stringify(result.wal))
      })*/
}

function switchHref(wallet, ...args) {
    //console.log(args)
    args.forEach(l => {
        var href=l.getAttribute("href") + "?tw=" + wallet
        l.setAttribute("href", href)
    });
}



