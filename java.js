function calcular(){

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let sinal = document.getElementById("sinais").value;

    let resultado;


    if(n1 == "" || n2 == ""){
        alert("Digite os dois números para o resultado!");
    }

    if(sinal == "soma"){

        resultado = n1 + n2;

    } else if (sinal == "sub"){

        resultado = n1 - n2;

    } else if (sinal == "div") {
        if(n2==0){
            alert("Resultado inexistente");
        }

        resultado = n1 / n2;

    } else if (sinal == "mult"){

        resultado = n1 * n2;

    }

    document.getElementById("Resultado").innerHTML = resultado;



}
calcular();