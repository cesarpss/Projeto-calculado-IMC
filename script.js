function formula(){
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value

    var imc = peso / altura ** 2

    var nome = document.getElementById("nome").value

    document.getElementById("resultado").value = imc

    if(imc <= 18.5){
        window.alert(nome +", você está muito magro")
    }
    else if(imc <= 24.9){
        window.alert(nome +", você está no peso ideal")
    }
    else if(imc <= 29.9){
        window.alert(nome +", você está com sobre peso")
    }
    else if(imc <= 39.9){
        window.alert(nome +", você está com obsidade")
    }
    else if(imc > 39.9) {
        window.alert(nome +", você está com obsidade mórbida")
    }
    
    
}





