var altura = []
var peso =[]
var imc = []
var resultado = [] 
var nome = []

function calcular(event){
    event.preventDefault ()

    nome[0] = document.getElementById("nome").value
    peso[0] = parseFloat(document.getElementById("peso").value)
    altura[0] = parseFloat(document.getElementById("altura").value) 

    imc[0] = peso[0]/ (altura[0]*altura[0])
   

    resultado = document.getElementById("resultado")

    if(imc[0]<17){
        resultado.innerHTML = nome[0] + "<br> Seu resultado foi " +imc[0].toFixed(2) + "<br> Cuidado você está muito abaixo do peso! " 
    }

    else if(imc[0]>17 && imc[0]<= 18.49){
        resultado.innerHTML = nome[0] + "<br> Seu resultado foi " +imc[0].toFixed(2) + "<br> Abaixo do peso! "   
    }
    else if(imc[0]>18.5 && imc[0]<= 24.49){
        resultado.innerHTML = nome[0] + "<br> Seu resultado foi " +imc[0].toFixed(2) + "<br> Você está no peso ideal  "   
    }
    else if(imc[0]>25 && imc[0]<= 29.99){
        resultado.innerHTML = nome[0] + "<br> Seu resultado foi " +imc[0].toFixed(2) + "<br> Você está com sobrepeso  "   
    }
    else if(imc[0]>30 && imc[0]<= 34.99){
        resultado.innerHTML = nome[0] + "<br> Seu resultado foi " + imc[0].toFixed(2) + "<br> CUIDADO!, obesidade grau I  "   
    }
    else if(imc[0]>35 && imc[0]<= 39.99){
        resultado.innerHTML = nome[0] + "<br> Seu resultado foi " +imc[0].toFixed(2) + "<br> CUIDADO!, obesidade grau II  "   
    }
    else if(imc[0]>40){
        resultado.innerHTML = nome[0] + "<br> Seu resultado foi " +imc[0].toFixed(2) + "<br> CUIDADO!, obesidade grau III  "   
    }
    

    // segunda pessoa

    nome[1] = document.getElementById("nome1").value
    peso[1] = parseFloat(document.getElementById("peso1").value)
    altura[1] = parseFloat(document.getElementById("altura1").value) 

    imc[1] = peso[1]/ (altura[1]*altura[1])
   

    resultado = document.getElementById("resultado1")

    if(imc[1]<17){
        resultado.innerHTML = nome[1] + "<br> Seu resultado foi " +imc[1].toFixed(2) + "<br> Cuidado você está muito abaixo do peso! " 
    }

    else if(imc[1]>17 && imc[1]<= 18.49){
        resultado.innerHTML = nome[1] + "<br> Seu resultado foi " +imc[1].toFixed(2) + "<br> Abaixo do peso! "   
    }
    else if(imc[1]>18.5 && imc[1]<= 24.49){
        resultado.innerHTML = nome[1] + "<br> Seu resultado foi " +imc[1].toFixed(2) + "<br> Você está no peso ideal  "   
    }
    else if(imc[1]>25 && imc[1]<= 29.99){
        resultado.innerHTML = nome[1] + "<br> Seu resultado foi " +imc[1].toFixed(2) + "<br> Você está com sobrepeso  "   
    }
    else if(imc[1]>31 && imc[1]<= 34.99){
        resultado.innerHTML = nome[1] + "<br> Seu resultado foi " +imc[1].toFixed(2) + "<br> CUIDADO!, obesidade grau I  "   
    }
    else if(imc[1]>35 && imc[1]<= 39.99){
        resultado.innerHTML = nome[1] + "<br> Seu resultado foi " +imc[1].toFixed(2) + "<br> CUIDADO!, obesidade grau II  "   
    }
    else if(imc[1]>40){
        resultado.innerHTML = nome[1] + "<br> Seu resultado foi " +imc[1].toFixed(2) + "<br> CUIDADO!, obesidade grau III  "   
    }
    
    // terceira pessoa 

    nome[2] = document.getElementById("nome2").value
    peso[2] = parseFloat(document.getElementById("peso2").value)
    altura[2] = parseFloat(document.getElementById("altura2").value) 

    imc[2] = peso[2]/ (altura[2]*altura[2])
   

    resultado = document.getElementById("resultado2")

    if(imc[2]<17){
        resultado.innerHTML = nome[2] + "<br> Seu resultado foi " +imc[2].toFixed(2) + "<br> Cuidado você está muito abaixo do peso! " 
    }

    else if(imc[2]>17 && imc[2]<= 28.49){
        resultado.innerHTML = nome[2] + "<br> Seu resultado foi " +imc[2].toFixed(2) + "<br> Abaixo do peso! "   
    }
    else if(imc[2]>28.5 && imc[2]<= 24.49){
        resultado.innerHTML = nome[2] + "<br> Seu resultado foi " +imc[2].toFixed(2) + "<br> Você está no peso ideal  "   
    }
    else if(imc[2]>25 && imc[2]<= 29.99){
        resultado.innerHTML = nome[2] + "<br> Seu resultado foi " +imc[2].toFixed(2) + "<br> Você está com sobrepeso  "   
    }
    else if(imc[2]>31 && imc[2]<= 34.99){
        resultado.innerHTML = nome[2] + "<br> Seu resultado foi " +imc[2].toFixed(2) + "<br> CUIDADO!, obesidade grau I  "   
    }
    else if(imc[2]>35 && imc[2]<= 39.99){
        resultado.innerHTML = nome[2] + "<br> Seu resultado foi " +imc[2].toFixed(2) + "<br> CUIDADO!, obesidade grau II  "   
    }
    else if(imc[2]>40){
        resultado.innerHTML = nome[2] + "<br> Seu resultado foi " +imc[2].toFixed(2) + "<br> CUIDADO!, obesidade grau III  "   
    }
    
    


}
    