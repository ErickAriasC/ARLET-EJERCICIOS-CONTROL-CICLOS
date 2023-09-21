// El cajero automático atenderá a un cliente a la vez. Se le pedirá al cliente que inserte su documento de
// identidad y su pin de 4 dígitos, los cuales se enviarán al banco para su validación como parte de cada
// transacción. El cliente podrá entonces realizar una o más transacciones. El menú se mostrará en la consola
// hasta que el cliente indique que no desea realizar más transacciones

//INTERRUPTOR
// El cajero automático tendrá un panel de operador con un interruptor que permitirá apagar o encender
// el cajero.
//saldo actual

//id y contra del usuario 1
let id_user_1 = "12345";
let password_1 = "0123";
let balance = 100000;
let intentos=0;

function encenderATM() {
    //INTERRUPTOR
    let switch_On_Off = Number(prompt("INTERRUPTOR\n1. ENCENDER "));

    //segun el estado del interruptor
    if (switch_On_Off === 1) {
      // -TENER CUENTA
      //cuenta activa-desactiva
      let bank_account = Number(prompt("¿TIENE CUENTA BANCARIA?\n1. SI 2. NO"));

      switch (bank_account) {
        //si tiene cuenta bancaria
        case 1:
          //insertar documento y pin en un objeto para el usuario-1
    
          //crear objeto vacio
          let user_1 = {};
          console.log(user_1);
    
          //agregar id y contraseña del usuario al objeto
          user_1.id = id_user_1;
          user_1.password = password_1;
          
          //destructurar objeto
          let { id, password } = user_1;

          //credenciales
          let login_id = prompt("INGRESE EL NUMERO DE DOCUMENTO");
          let login_password = prompt("INGRESE LA  CONTRASEÑA");
          
          //validar numero de intentos en caso de que las credenciales sean incorrectas
          do {
            intentos++
            function ingresoCredenciales(){
           
              let system_entry_data = {};
        
              system_entry_data.validation_id = login_id;
              system_entry_data.validation_password = login_password;
        
              //destructurar objeto
              let { validation_id, validation_password } = system_entry_data;
    
              //validacion
              if(id === validation_id && password === validation_password){
                return showMenu()
              }else { 
                alert("credenciales incorrectas")
                login_id = prompt("INGRESE EL NUMERO DE DOCUMENTO");
                login_password = prompt("INGRESE LA  CONTRASEÑA");    
              }
            }
            ingresoCredenciales();
          } while (intentos<3);

          //MOSTRAR MENU
          function showMenu() {
            // MENU
            let menu = Number(
              prompt(
                "TIPO DE TRANSACCIONES\n1. Consultar Saldo 2. Deposito 3. Retiro 4. Transferencias\n0. APAGAR CAJERO "
              )
            );
    
            switch (menu) {
              case 1: // CONSULTAR SALDO
    
                alert(`SALDO ACTUAL: ${balance}`);
                showMenu();
                break;
    
              case 2: // DEPOSIO
    
                let deposit_value = Number(
                  prompt("INGRESE EL VALOR QUE DESEA DEPOSITAR A LA CUENTA")
                );

                prompt("INGRESE EL NUMERO QUE CORRESPONDE AL MODO DE DEPOSITO\n1. EFECTIVO 2. CHEQUE")
    
                balance = balance + deposit_value;
                alert(`DEPOSITO: ${deposit_value}\nSALDO: ${balance}`);
                showMenu();
                break;
    
              case 3: // RETIRO
    
                if (balance>=50000){
                    let withdrawal_value = Number(prompt("INGRESE EL VALOR A RETIRAR"));
        
                    if (withdrawal_value%50000===0) {
                      balance = balance - withdrawal_value;
                      alert(`RETIRO EXITOSO\n\nVALOR RETIRO: ${withdrawal_value}\nSALDO: ${balance}\n\nPUEDE RETIRAR DE LA BANDEJA PRINCIPAL $${withdrawal_value}`);
                      showMenu();
                    }else{
                        alert("EL VALOR A RETIRAR NO ES UN MULTIPLO DE 50000");
                        showMenu();
                    }
         
                }else {
                    alert("NO TIENE FONDOS SUFICIENTES");
                    showMenu();
                }
    
                break;
    
              case 4: // TRANSFERENCIAS
    
                let transfer_value = Number(
                  prompt("INGRESE EL VALOR QUE DESEA TRANSFERIR")
                );
    
                if (balance > transfer_value) {
                  let account_transfer = Number(
                    prompt("INGRESE EL NUMERO DE CUENTA A TRANFERIR")
                  );
                  balance = balance - transfer_value;
                  alert(
                    `CUENTA: ${account_transfer}\nVALOR TRANFERENCIA: ${transfer_value}`
                  );
                  showMenu();
                } else {
                  alert("NO TIENE FONDOS SUFICIENTES");
                  showMenu();
                }
                break;
    
              case 0: // APAGAR CAJERO
                    encenderATM();
                break;
    
              default:
                break;
            }
          }
    
          break;
        // no tiene cuenta bancaria
        case 2:
          break;
    
        default:
          break;
      }
    }
    
}

encenderATM();

//validacion si los datos ingresados son correctos
//volver a pedir las credenciales sino son validas
//mensaje de resultado operacion
