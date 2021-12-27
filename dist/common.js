const url_string = window.location.href
const url = new URL(url_string)

const payoutNavLink = document.querySelector('[href="https://pool.gravitsapa.space/payouts"]')
const statNavLink = document.querySelector('[href="https://pool.gravitsapa.space/wallet"]') 

const pageDOM = document.getElementsByTagName("main")[0]
const pageBody = document.getElementsByTagName("body")[0]
const pageNav = document.getElementsByTagName("nav")[0]

const poolWallet = 'EQAzXEhYkHxaObakQg31ZEMOmVtCSxcsczjBGYYleiK2EFVz'
const tonWalletApi = 'https://api.ton.sh/getAddressInformation?address='


let lw = getLocalWallet()
let tw = url.searchParams.get("tw")
let currentPath = url.pathname

//var currentPoolBalance = null

//console.log("current path", currentPath)
//console.log("lw ", lw)
//console.log("tw ", tw)




function switchHref(wallet, ...args) {
    args.forEach(l => {
        var href=l.getAttribute("href") + "?tw=" + wallet
        l.setAttribute("href", href)
    });
}

function setLocalWallet(w){
    localStorage.setItem("wal", w)
}

function getLocalWallet() {
    return localStorage.getItem("wal")
}

/* Wallet Injection */
if (tw) {
    setLocalWallet(tw)
    switchHref(tw, payoutNavLink, statNavLink)
    } else if (getLocalWallet()) {
        lw = getLocalWallet()
        switchHref(lw, payoutNavLink, statNavLink)
    }




