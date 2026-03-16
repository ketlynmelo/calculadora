function calcular(){

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let sinal = document.getElementById("sinais").value;

    let resultado;

    if(sinal == "soma"){

        resultado = n1 + n2;

    } else if (sinal == "sub"){

        resultado = n1 - n2;

    } else if (sinal == "div") {

        resultado = n1 / n2;

    } else if (sinal == "mult"){

        resultado = n1 * n2;

    }

    document.getElementById("Resultado").innerHTML = resultado;



}
calcular();