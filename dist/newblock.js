/* ------------------------------------------------------------------------------------------------- */
/* --                            NEW BLOCKS NOTIFICATIONS                                         -- */
/* ------------------------------------------------------------------------------------------------- */

function getStoredBalance(){
    const gBalance = localStorage.getItem("g_balance")
    //console.log("got - gbalance - ", gBalance)
    return gBalance
  }
  
function storeCurrentBalance(currentBalance){
    localStorage.setItem("g_balance", currentBalance)  
    //console.log("stored - gbalance - ", currentBalance)
}

// Конвертация из нанокоинов
function convertNano(num){
    return num / Math.pow(10,9)
}

function checkNewBlockFound(){
  
    let obj

    fetch(tonWalletApi + poolWallet)
      .then(res => res.json())
      .then(data => obj = data)
      .then(() => checkNewBlock(obj))

      function checkNewBlock(data){
        const currentPoolBalance = convertNano(data.result.balance)
        const storedPoolBalance =  getStoredBalance()
        const dif = currentPoolBalance - storedPoolBalance
        console.log(dif)
        if ( dif > 1) {
            newBlockNotification()
            storeCurrentBalance(currentPoolBalance)
        }
        else {
            storeCurrentBalance(currentPoolBalance)
        }
    }
}

checkNewBlockFound()

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