//Sintaxis General
const AGC = document.getElementById("AGC")
const SXGE = document.getElementById("SXGE")


AGC.addEventListener("click",function(){
    
    SXGE.classList.add("Clase2")

});

//Classlist.length
const CCT = document.getElementById("CCT")
const LENG = document.getElementById("LENG")

CCT.addEventListener("click",function(){
    var cantidad =LENG.classList.length
    LENG.textContent = `El elemento cuenta con: ${cantidad} clases`;
});




//classlist.item
const ITEM = document.getElementById("ITEM")
const CN = document.getElementById("CN")
const OT = document.getElementById("OT")

OT.addEventListener("click", function(){
    cantidad = CN.value
    var fun = ITEM.classList.item(cantidad)
    ITEM.textContent = `La posicion que busco es el: ${fun}`;
    
})

//classList.contains
const CON = document.getElementById("CON")
const CONT = document.getElementById("CONT")
const CAN = document.getElementById("CAN")

CAN.addEventListener("click", function(){
    num = CONT.value
    var funt = CON.classList.contains(num)
    if(funt){
    CON.textContent = `La posicion que buscaba fue encontrada`;

    } else{
    CON.textContent = `La posicion que buscaba NO fue encontrada`;

    }
    
})


//classList.remove
const REM = document.getElementById("REM")
const REMO = document.getElementById("REMO")
const CA = document.getElementById("CA")

CA.addEventListener("click", function(){
    num = REMO.value
    var funt = REM.classList.remove(num)
    REM.textContent = `La posicion ${num} que deseaba fue removida`;    
})


//classList.Toggle
const TOG = document.getElementById("TOG")
const TOGG = document.getElementById("TOGG")
const TO = document.getElementById("TO")

TO.addEventListener("click", function(){
    clas = TOGG.value
    var funt = TOG.classList.toggle(clas)
    TOG.textContent = `El cambio con la clase ${clas} fue realizado`;    
})

//classList.ToggleEX
const TOGEX = document.getElementById("TOGEX")
const TOGGEX = document.getElementById("TOGGEX")
const TOLEX = document.getElementById("TOLEX")
const TOEX = document.getElementById("TOEX")

TOEX.addEventListener("click", function(){
    boo = TOLEX.value
    clas = TOGGEX.value
    var funt = TOGEX.classList.toggle(clas,boo)
    TOGEX.textContent = `El cambio con la clase ${clas} fue realizado`;    
})

//classList.replace
const ANT =document.getElementById("ANT")
const REP = document.getElementById("REP")
const REPL = document.getElementById("REPL")
const RELP = document.getElementById("RELP")
const RE = document.getElementById("RE")
RE.addEventListener("click", function(){
    anterior = RELP.value
    siguiente = REPL.value
    var funt = REP.classList.replace(anterior,siguiente)
    REP.textContent = `El cambio con la clase ${anterior} fue realizado`;    
    ANT.textContent = `Clase anterior: ${siguiente}`
})


