//DECLARACION DE VARIABLES
let choose_module;
let choose_segment;
let transfer;

//plantilla modulos
class modules{
    constructor(name){
        //nombre modulo
        this.name_module=name      
        //atendidos por dia Y segmentacion
        this.daily_users={
            amount:0,
            students:0,
            teacher:0    
        }
    }
    //mostrar informacion de modulo
    showInformation(){
        return `MODULO: ${this.name_module}\nATENDIDOS POR DIA: ${this.daily_users.amount}\nSTUDENT: ${this.daily_users.students}\nTEACHER: ${this.daily_users.teacher}`
    }
//contador usuarios
    sumUsers() {
        return this.daily_users.amount++;
    }
 //contador segmento  
    sumSegment(){
        if(choose_segment===1){
            return this.daily_users.students++
        }else if (choose_segment===2){
            return this.daily_users.teacher++    
        }
    }   
};

// //modulo llamada telefonica
const phone_call= new modules('PHONE CALL')

//modulo oficina
const office= new modules('OFFICE')

//CICLO
do {
    //ESCOGER MODULO
    menuInitial();
} while (transfer===2 || transfer===1 && choose_module!==3);

//logica programa
function menuInitial() {
    //prompt para escoger el modulo 
    choose_module=Number(prompt('INGRESE EL NUMERO DEL MODULO AL QUE DESEA INGRESAR:\n1. MODULO LLAMADAS TELEFONICAS\n2. MODULO OFICINA\n3. MOSTRAR INFORMES GENERALES'))
    if (choose_module===1){
        //solicitud tipo segmento
        choose_segment=Number(prompt('INGRESE EL NUMERO SEGUN CON LO QUE USTED SE IDENTIFIQUE:\n1. ESTUDIANTE\n2. DOCENTE'))

        processModulePhoneCall();
        
        //transferecia
        questionTransfer();
        if (transfer===1) {
            processModuleOffice();
            alert('TEN UN BUEN DIA, GRACIAS POR HACER USO DE NUESTROS SERVICIOS')
        }

    }else if(choose_module===2){
        //solicitud tipo segmento
        choose_segment=Number(prompt('INGRESE EL NUMERO SEGUN CON LO QUE USTED SE IDENTIFIQUE:\n1. ESTUDIANTE\n2. DOCENTE'))

        processModuleOffice();
        
        //transferecia
        questionTransfer();
        if (transfer===1) {
            processModulePhoneCall();
            alert('TEN UN BUEN DIA, GRACIAS POR HACER US DE NUESTROS SERVICIOS')
        } 
    }else if(choose_module===3){
        //mostrar estadisticas generales
        alert(`TOTAL USUARIOS ATENDIDOS: ${phone_call.daily_users.amount+office.daily_users.amount}\nESTUDIANTES: ${phone_call.daily_users.students+office.daily_users.students}\nDOCENTES: ${phone_call.daily_users.teacher+office.daily_users.teacher}`)
    }    
}

function questionTransfer(){
    return transfer=Number(prompt('DIGITE\n1. TRANFERIR DE MODULO\n2. VOLVER AL MENU INICIAL'))
}

//FUNCION ACUMULADORES PHONE CALL
function processModulePhoneCall() {
    phone_call.sumUsers();
    phone_call.sumSegment();
    console.log(phone_call.showInformation());        
}

//FUNCION ACUMULADORES OFFICE
function processModuleOffice() {
    office.sumUsers();
    office.sumSegment();
    console.log(office.showInformation());   
}









