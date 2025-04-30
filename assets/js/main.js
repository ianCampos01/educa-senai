const buttonConfirm = document.getElementById("add"); // pegando id do botão no html
const RoutineInformation = document.getElementById("rotina"); // pegando valores do input Html

function elementsForList(valueForInput){
    const listNotOrdened = document.getElementById("listNotOrdened");// pegando id da lista não ordenada
    const listOrdened = document.getElementById("listOrdened"); // pegando id da lista ordenada

    let createElementUl = document.createElement("li");
    let createElementOl = document.createElement("li");

    createElementUl.textContent = `${valueForInput}`;
    createElementOl.textContent = valueForInput;

    listOrdened.appendChild(createElementUl);
    listNotOrdened.appendChild(createElementOl);

}

function toSend(){
    const valueForInput = RoutineInformation.value.trim();
    let fieldError = document.getElementById("fieldError");

    if(valueForInput === ""){
        RoutineInformation.style.border = "2px solid red";
        return fieldError.innerHTML = "Campo Vazio!";
    };

    fieldError.innerHTML = "";

    RoutineInformation.style.border = "";

    elementsForList(valueForInput);
    RoutineInformation.value = '';
}

buttonConfirm.addEventListener("click", toSend)

RoutineInformation.addEventListener("keydown", function(e){
    if(event.key === "Enter"){
        toSend();
    }
});