// document.getElementById("count-el").innerText=5;

let countEl=document.getElementById("count-el")

let count=0

function increment(){
    count=count+1
    countEl.innerText=count
    
}

 let breadEl=document.getElementById("bread")
let ox=8
function save(){
    ox=ox+1
    function brick(){
        console.log(ox)
    }
    brick()
}

