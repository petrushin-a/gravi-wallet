const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();


const todayMidnight = new Date(currentYear, currentMonth, currentDayOfMonth, 0, 0, 0)


function todayPayout(){
    const currentDate = new Date();

    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();

    const todayMidnight = new Date(currentYear, currentMonth, currentDayOfMonth, 0, 0, 0)

    let todayPayoutAmount = 0
  
    let obj

    fetch(url+'&json=true')
      .then(res => res.json())
      .then(data => obj = data)
      .then(() => getTodayPays(obj))

      function getTodayPays(data){
        //console.log(data)
        data.forEach(el => {
            //console.log("el: ", el)
            
            let objKey = Object.keys(el)[0]
            //console.log("key:", objKey)

            let timestamp = objKey.replace('.json','')
            //console.log("timestamp: ", timestamp)

            let blockDate = new Date(timestamp * 1000)
            //console.log("Block date: ", blockDate)

            let value = el[objKey]
            //console.log("value:", value)

            if (blockDate > todayMidnight){
                todayPayoutAmount += value
            }
            
        });
        //console.log(todayPayoutAmount)
        /* Compomemt */
        const graviPayHeader = document.getElementsByTagName('h4')[0]
        todayElement = `Today estimate: <span class="badge rounded-pill bg-success">${todayPayoutAmount.toFixed(4)}</span>`
        graviPayHeader.insertAdjacentHTML('afterend', todayElement)
        
       
    }
    
}

todayPayout()





