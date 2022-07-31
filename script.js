function calcular(){
    event.preventDefault();

    let alcoolImput = document.getElementById("alcool").value;
    let gasolinaImput = document.getElementById("gasolina").value;
    let contentresult = document.getElementById("content-result");
    let textresult = document.getElementById("text-result");

    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result");
    /*
    Calculo: alcool / gasolina
    Se o resultado for menor que 0,7 compensa usar alcool
    */

    let calculo = (alcoolImput / gasolinaImput);

    if(calculo < 0.7){
       textresult.innerHTML = "Compensa usar Álcool" 
    }else{
        textresult.innerHTML = "Compensa usar Gasolina"
    }

    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaImput;
    alcoolSpan.innerHTML = "Álcool R$ " + alcoolImput;

    contentresult.classList.remove("hide")
}