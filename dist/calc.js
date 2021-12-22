const gpuHasrateData = {
    "gpus" : [
        {
          "model": "RTX A5000",
          "hashrate_avg": 3.82
        },
        {
          "model": "RTX A4000",
          "hashrate_avg": 2.36
        },
        {
          "model": "RTX A2000",
          "hashrate_avg": 1.3
        },
        {
          "model": "RTX 3090",
          "hashrate_avg": 5.1
        },
        {
          "model": "RTX 3080 ti",
          "hashrate_avg": 4.1
        },
        {
          "model": "RTX 3080",
          "hashrate_avg": 3.9
        },
        {
          "model": "RTX 3070 ti",
          "hashrate_avg": 3
        },
        {
          "model": "RTX 3070",
          "hashrate_avg": 2.73
        },
        {
          "model": "RTX 3060 ti",
          "hashrate_avg": 2.26
        },
        {
          "model": "RTX 3060",
          "hashrate_avg": 1.57
        },
        {
          "model": "GTX 1080 ti 11Gb",
          "hashrate_avg": 2
        },
        {
          "model": "GTX 1660 ti 6Gb",
          "hashrate_avg": 1.38
        },
        {
          "model": "GTX 1660 SUPER 6Gb",
          "hashrate_avg": 1.28
        },
        {
          "model": "GTX 1660 6Gb",
          "hashrate_avg": 1.29
        },
        {
          "model": "GTX 1060 6Gb",
          "hashrate_avg": 0.56
        }
      ]
}

const currentAvgProfitGhs = Number(document.getElementById('avgProfitPerGHS1USD').textContent)
//console.log("Current AVG", currentAvgProfitGhs)
const prevAvgProfitGhs = Number(document.getElementById('avgProfitPerGHS1USDinDay').textContent)
//console.log("Previous AVG", prevAvgProfitGhs)




function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

function selectConstruct (data){
    var select = document.createElement('select')
    setAttributes(select, {"class": "form-select gpu-select", "style": "display: inline-block; min-width: 67%" })
    
    //const defaultOption = document.createElement('option')
    //setAttributes(defaultOption, {})


    for (var key in data.gpus){
        currentOption = document.createElement('option')
        gpu = data.gpus[key]
        setAttributes(currentOption,{"value": key, "hashrate": gpu.hashrate_avg, "power": gpu.power })
        currentOption.textContent = gpu.model
        select.appendChild(currentOption)
        
    }
    return select
}

function inputGroupConstruct(){
    var inputGroup = document.createElement('div')
    setAttributes(inputGroup, {"class": "input-group mb-3"})  
    //console.log(inputGroup)

    var inputGroupText = document.createElement('span')
    setAttributes(inputGroupText, {"class": "input-group-text", "id": "basic-addon1"})
    //console.log(inputGroupText)

    var quantityInput = document.createElement('input')
    setAttributes (quantityInput,{"type": "text", "class": "form-control gpu-quantity","placeholder":"Кол-во"})
    //console.log(quantityInput)
    /*
    var addButton = document.createElement('button')
    setAttributes (addButton,{"class": "btn btn-primary add-gpu"})
    addButton.textContent = "+"
    //console.log(addButton)
    */
    var removeButton = document.createElement('button')
    setAttributes (removeButton,{"class": "btn btn-primary remove-gpu"})
    removeButton.textContent = "-"
    //console.log(removeButton)

    inputGroupText.appendChild(selectConstruct(gpuHasrateData))
    inputGroupText.appendChild(quantityInput)
    //inputGroupText.appendChild(addButton)
    inputGroupText.appendChild(removeButton)
    inputGroup.appendChild(inputGroupText)
   
    return inputGroup
    
}

function calculatorConstruct(){
    const profiTable = document.getElementsByClassName("d-grid mx-auto text-center")[0]
    const inputGroup = inputGroupConstruct()
    //console.log(inputGroup)
    const calcHTMLTpl = `
    
    <button class="btn btn-secondary position-relative mb-1 mt-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#kurkul" aria-controls="offcanvasExample">
    🐔 Куркулятор
    </button>
    
    
    <!-- Sidebar offcanvas -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="kurkul" aria-labelledby="offcanvasExampleLabel" style="width:600px">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">🐔 Куркулятор прибыльности</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div id="gpuList">
        ${inputGroup.outerHTML}
        </div>
        <div class="mt-3">
            <button class="btn btn-primary" id="addGPUBtn">
                + Добавить GPU
            </button>
            <button class="btn btn-secondary" id="calculate">
                🐔 Курлык
            </button>
        </div>
        <div class="row totals">
            <div class="col">
                Current (daily)
                <h1 id="calcCurrent"></h1>
            </div>
            <div class="col">
                Average (daily)
                <h1 id="calcAverage"></h1>
            </div>
        </div>
    </div>
    <!-- / Sidebar offcanvas -->
    </div>
    ` 
    

    profiTable.insertAdjacentHTML('beforeend', calcHTMLTpl)
}

calculatorConstruct()


/* Добавление инпута, да простят меня девы реакта (не простят) */
const addGPUBtn = document.getElementById('addGPUBtn')
const gpuList = document.getElementById('gpuList')

addGPUBtn.onclick = () => {
    gpuList.appendChild(inputGroupConstruct())
    activateBtns()
    

}

function activateBtns() {
    var btns = document.getElementsByClassName('remove-gpu')
    for (b in btns){
        btns[b].onclick = function() {
            this.parentNode.parentNode.remove()
        }
    }
    
}
document.getElementsByClassName('remove-gpu')[0].disabled = true
activateBtns()


/* Куркуляция */

const calcBtn = document.getElementById('calculate').onclick = () => {
    getTotalHashrate()
}

// -- Найдём общий хешрейт

function getTotalHashrate() {
    
    var totalHashrate = 0
    const gpuHashrates = []
    const gpuQuantities = []
    const gpuCollection = document.getElementsByClassName('gpu-select')
    
    for (let item of gpuCollection) {
        var hashrate = item.options[item.value].getAttribute('hashrate')
        gpuHashrates.push(hashrate)
    }
    //console.log("GPU hasrates :", gpuHashrates)
    
   
   
   
    const gpuQuantity = document.getElementsByClassName('gpu-quantity')
    
    for (let item of gpuQuantity){
        gpuQuantities.push(item.value)
    }
    //console.log("GPU quantities :", gpuQuantities)   
    
    
// -- Total hashrate calc
   
    for (let i in gpuHashrates){
        let currentPerformance = gpuHashrates[i] * gpuQuantities[i]
        totalHashrate += currentPerformance
    }
    
// -- let's fetch data

    const finalCurrent = totalHashrate * currentAvgProfitGhs
    const finalAvg = totalHashrate * prevAvgProfitGhs  
    document.getElementById('calcCurrent').textContent = "$" + finalCurrent.toFixed(2)
    document.getElementById('calcAverage').textContent = "$" + finalAvg.toFixed(2)

}


