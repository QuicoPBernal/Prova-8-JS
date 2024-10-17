const metrosInput = document.getElementById("metros");
const unidadeDestinoSelect = document.getElementById("unidadeDestino");
const converterButton = document.getElementById("converter");
const resultadoDiv = document.getElementById("resultado");

converterButton.addEventListener("click", () => {
    const metros = parseFloat(metrosInput.value);

    if (isNaN(metros)) {
        resultadoDiv.textContent = "Por favor, insira um valor numérico válido.";
        return;
    }

    const unidadeDestino = unidadeDestinoSelect.value;

    let resultado;

    switch (unidadeDestino) {
        case "jarda":
            resultado = metros * 1.094;
            resultadoDiv.textContent = `${metros} metros são iguais a ${resultado.toFixed(3)} jardas.`;
            break;
        case "pe":
            resultado = metros * 3.281;
            resultadoDiv.textContent = `${metros} metros são iguais a ${resultado.toFixed(3)} pés.`;
            break;
        case "polegada":
            resultado = metros * 39.37;
            resultadoDiv.textContent = `${metros} metros são iguais a ${resultado.toFixed(3)} polegadas.`;
            break;
        case "milha":
            resultado = metros * 0.000621;
            resultadoDiv.textContent = `${metros} metros são iguais a ${resultado.toFixed(6)} milhas.`;
            break;
        default:
            resultadoDiv.textContent = "Erro: Unidade de destino inválida.";
    }
});
