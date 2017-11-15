function kilometros(valor){
   let milhas = valor*0.62137119;
   var arredondado = parseFloat(milhas.toFixed(2));
   console.log("Valor em milhas:" + arredondado); 
}
kilometros(process.argv[2]);