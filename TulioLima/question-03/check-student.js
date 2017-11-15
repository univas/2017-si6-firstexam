const students =  require('./studentsDB.json')

filter(process.argv[2]);

function filter(id){
            var soma = 0;
            var student = students[id-1];
            console.log(student.id);   
            console.log(student.name);
            for(var i = 0; i < 4;i++){
                var soma = soma + student.grades[i];   
            }
            var media = soma/4;
            console.log("Media " + media);
            if(media >=60){
                console.log("Situação: Aprovado");
            }else{
                if(media < 50){
                    console.log("Situação: Reprovado");
                }else{
                    console.log("Situação: Final");
                }
            }                                
}

//Consegui resolver pelo indice você coloca o indice no NODEJS e ele ta da as informações.


