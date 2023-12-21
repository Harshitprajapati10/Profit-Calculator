let button = document.getElementsByClassName("Calculate")[0]
let result = document.getElementsByClassName("result")[0]

button.addEventListener("click",()=>{
    result.innerHTML = ""
    let Principal = parseInt(principal.value)
    let Rate = parseInt(rate.value)
    let time = parseInt(Time.value)

    for(let i =1 ; i<(time+1); i++){
        let investment = Principal*(Rate/100);
        let a = `${investment} lage ${i} time`
        let profit = investment * (70/100);
        let b = `${profit} profit ${i} time`
        Principal = Principal + profit
        let c = `${Principal} principal ${i} time`
       
        let div = document.createElement("div")
        div.classList.add("rbox")
        div.id = `meta${i}`
        div.innerHTML = `<div class="item1 boxitem">${a}</div>
        <div class="item2 boxitem">${b}</div>
        <div class="item3 boxitem">${c}</div>`
       
        result.appendChild(div)
        
    }
})