const url_string = window.location.href
const url = new URL(url_string)

const payoutNavLink = document.querySelector('[href="https://pool.gravitsapa.space/payouts"]')
const statNavLink = document.querySelector('[href="https://pool.gravitsapa.space/wallet"]') 
const pageDOM = document.getElementsByTagName("main")[0]

let lw = getLocalWallet()
let tw = url.searchParams.get("tw")
let currentPath = url.pathname

var currentPoolBalance = null
//console.log("current path", currentPath)
//console.log("lw ", lw)
//console.log("tw ", tw)

if (tw) {
    setLocalWallet(tw)
    switchHref(tw, payoutNavLink, statNavLink)
        if (currentPath == "/wallet"){
            checkNewBlockFound()
        }

    } else if (getLocalWallet()) {
    lw = getLocalWallet()
    switchHref(lw, payoutNavLink, statNavLink)
    switch (currentPath){
        case "/wallet":
            //alert("w")
            checkNewBlockFound()
        //break
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

function setLocalWallet(w){
    localStorage.setItem("wal", w)
}

function getLocalWallet() {
    return localStorage.getItem("wal")
}

function switchHref(wallet, ...args) {
    args.forEach(l => {
        var href=l.getAttribute("href") + "?tw=" + wallet
        l.setAttribute("href", href)
    });
}

function getStoredBalance(){
    const gBalance = localStorage.getItem("g_balance")
    //console.log("got - gbalance - ", gBalance)
    return gBalance
  }
  
function storeCurrentBalance(currentBalance){
    localStorage.setItem("g_balance", currentBalance)  
    //console.log("stored - gbalance - ", currentBalance)
}


function checkNewBlockFound(){

    setTimeout(() => {
        currentPoolBalance = document.getElementById('pool_balance').textContent.trim()
        if (currentPoolBalance != 0){
            const storedBalance = getStoredBalance()
            const dif = currentPoolBalance - storedBalance 
                if (!storedBalance) {
                    storeCurrentBalance(currentPoolBalance)
                }
                else if ( dif > 1) {
                    newBlockNotification()
                }
        } else {
            location.reload()
        }
        
        localStorage.setItem("g_balance", currentPoolBalance)  
    }, 1000);
}

function newBlockNotification() {
    // Проверка поддержки браузером уведомлений
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Проверка разрешения на отправку уведомлений
    else if (Notification.permission === "granted") {
      // Если разрешено, то создаём уведомление
      var notification = new Notification("New block!");
    }
  
    // В противном случае, запрашиваем разрешение
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // Если пользователь разрешил, то создаём уведомление
        if (permission === "granted") {
          var notification = new Notification("New block found!");
        }
      });
    }
    // В конечном счёте, если пользователь отказался от получения
    // уведомлений, то стоит уважать его выбор и не беспокоить его
    // по этому поводу.
  }



