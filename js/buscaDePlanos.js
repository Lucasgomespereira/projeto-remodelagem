var dataList = document.getElementById("listaDePlanos");

//Buscando o elemento planos.json
var requestURL = "../planos.json";
var request = new XMLHttpRequest();

//Criação da requisição e do seu tipo
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

//Função para carregar a requisição
request.onload = function () {
    var responseDataText = request.response;
    var responseData = JSON.parse(responseDataText);
    populateDataListPlans(responseData);
}

//Função para popular o elemento option do Data List
function populateDataListPlans(jsonObj) {
    var values = jsonObj['planos'];
    for (var i = 0; i < values.length; i++) {
        var OptionDataList = document.createElement('option');
        OptionDataList.textContent = values[i].valor;
        dataList.appendChild(OptionDataList);
    }
}