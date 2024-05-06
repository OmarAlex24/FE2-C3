//Valores de retorno del método prompt

valorRetornado = prompt("Ingrese un valor en este espacio:", "Valor por defecto");

if (valorRetornado == null){
      // Aquí las acciones siendo que el usuario canceló el ingreso.
      console.log("El usuario hizo clic en Cancelar");
}
else{
      if(valorRetornado != ""){
            // Aquí las acciones en función de lo que el ingresó el usuario.
            console.log("El usuario hizo clic en Aceptar y el valor que ingresó es " + valorRetornado);
      }
      else{
            // Aquí las acciones siendo que el usuario no ingresó valor alguno.
            console.log("El usuario no ingresó nada e hizo clic en Aceptar");
      }
}
