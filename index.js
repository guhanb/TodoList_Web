// to excute popup function

var addbtn = document.getElementById("add-btn")
var popup = document.getElementById("pop-up")
var popupdet = document.getElementById("pop-up-det")
addbtn.addEventListener("click" , function(){
    popup.style.display = "block"
    popupdet.style.display = "block"
})

// removing default action 

var cancelbtn = document.getElementById("Cancel-btn")

cancelbtn.addEventListener("click" , function(event){
    event.preventDefault()
    popup.style.display = "none"
    popupdet.style.display = "none"
})

// fetching input value from card

var cards = document.getElementById("cards")
var inputhead = document.getElementById("input-head")
var inputNotes = document.getElementById("input-Notes")
var Addingbtn = document.getElementById("Adding-btn")

Addingbtn.addEventListener("click" , function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("id","OneCard")
    div.innerHTML = `<h3>${inputhead.value}</h3>
    <p>${inputNotes.value}</p>
    <button class="card-btn" onclick = "delNote(event)">Delete</button>`  
    popup.style.display = "none"
    popupdet.style.display = "none"
    cards.append(div)

})

var cardbtn = document.querySelector(".card-btn")

function delNote(event){
    event.target.parentElement.remove()
}

