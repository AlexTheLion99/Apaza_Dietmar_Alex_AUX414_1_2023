var btn = document.getElementById("btn")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")


function mostrarData()

{
    let txt1 = document.getElementById("txt1").value;
    let txt2 = document.getElementById("txt2").value;
    let result = parseInt(txt1) + parseInt(txt2);
    console.log("la suma es:", result)
    alert("la suma es:" + result)

}
btn.addEventListener('click',mostrarData);


function multiplicarN(){

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseInt(num1) * parseInt(num2);
    console.log("la multiplicacion es:", resultado)
    alert("la multiplicacion es:" + resultado)
}
btn1.addEventListener('click',multiplicarN);

function dividirN(){

    let div1 = document.getElementById("div1").value;
    let div2 = document.getElementById("div2").value;
    let resultados = parseInt(div1) / parseInt(div2);
    console.log("la divicion es:", resultados)
    alert("la divicion es:" + resultados)
}

btn2.addEventListener('click',dividirN);

function restaN(){

    let rest1 = document.getElementById("rest1").value;
    let rest2 = document.getElementById("rest2").value;
    let resultad = parseInt(rest1) - parseInt(rest2);
    console.log("la resta es:", resultad)
    alert("la resta es:" + resultad)
}

btn3.addEventListener('click',restaN);

calc = document.getElementById("calc");
kg = document.getElementById("kg");
m = document.getElementById("m");
imc = document.getElementById("imc");

lectura = document.getElementById("lectura");

calc.onclick = function(){
    if(kg.value!="" && m.value!=""){
        imcx = (kg.value / (m.value* m.value));
        imc.innerHTML = imcx
        console.log(imcx);

        if(imcx<18){ lectura.innerHTML = "Bajo Peso"; }
        else if(imcx>=18 && imcx<=24.9){ lectura.innerHTML = "Peso Normal"; }
        else if(imcx>=25 && imcx<=29.9){ lectura.innerHTML = "Sobre Peso"; }
        else if(imcx>30){ lectura.innerHTML = "Obesidad"; }

    }
    else{
        alert("Debes ingresar peso y altura.")
    }



    let masculino = document.getElementById("Masculino");
    if (masculino.checked) {
        alert("es varon")

    }

    console.log("Es:", Masculino)
  
    let femenino = document.getElementById("Femenino");
    if (femenino.checked) {
        alert("es mujer")

    }
    else
    console.log("Es:", Femenino)
};

function reiniciar () {
    window.location.href = window.location.href;
}