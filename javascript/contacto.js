function validar(){

    var nom = document.getElementById("nom");
    var mail = document.getElementById("mail");
    
    var mail1 = parseInt(mail.value);
    
    if( nom.value == ''){
    
        alert("Falto ingresar el Nombre o el apellido")
    }else if (mail.value == ''){
    
        alert("Falto ingresar el Mail")
    }
    
    
    
    }