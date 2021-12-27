const statsTpl=`
    <div class="row">
        <div class="col">
            <div class="hdg">Heading</div>
            <div class="num">@</div>
            <div class="gray">gray text</div>
        </div>
        <div class="col">
            <div class="hdg">Heading</div>
            <div class="num">@</div>
            <div class="gray">gray text</div>
        </div>
        <div class="col">
            <div class="hdg">Heading</div>
            <div class="num">@</div>
            <div class="gray">gray text</div>
        </div>
        <div class="col">
            <div class="hdg">Heading</div>
            <div class="num">@</div>
            <div class="gray">gray text</div>
        </div>
        <div class="col">
            <div class="hdg">Heading</div>
            <div class="num">@</div>
            <div class="gray">gray text</div>
        </div>
        <div class="col">
            <div class="hdg">Heading</div>
            <div class="num">@</div>
            <div class="gray">gray text</div>
        </div>
        <div class="col">
            <div class="hdg">Heading</div>
            <div class="num">@</div>
            <div class="gray">gray text</div>
        </div>
        <div class="col">
            <div class="hdg">Heading</div>
            <div class="num">@</div>
            <div class="gray">gray text</div>
        </div>
        <div class="col">
            <div class="hdg">Heading</div>
            <div class="num">@</div>
            <div class="gray">gray text</div>
        </div>
        <div class="col">
            <div class="hdg">Heading</div>
            <div class="num">@</div>
            <div class="gray">gray text</div>
        </div>        
    </div>
`


const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();


const todayMidnight = new Date(currentYear, currentMonth, currentDayOfMonth, 0, 0, 0)


function getBlockJSON(){
    fetch(url+'&json=true').then((response) => {} ).then((data) => {console.log(data)})
}


const blocksJSON = getBlockJSON()

console.log(blocksJSON)

/*
document.getElementById('totalProfit').insertAdjacentHTML("afterend",statsTpl)
var pows = document.querySelectorAll('#table_log .blockProfit')
console.log(pows)*/
