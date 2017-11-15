const students = require('./studentsDB.json')


console.log(students[0].grades[0]);

function getStudentsituation(value){
            
    for (var i = 0; i < students.length; i++) {
        var total = 0;
        var status = ""
        if(value == students[i].id){
                for(var j = 0; j < students[i].grades[j]; j++){
                      total =  total + students[i].grades[j];
                    }
                    
                    var media = total / students[i].grades.length;

                if(media >= 60){
                    status = "Aprovado";
                }
                else if(media >= 50 && media < 60)
                    {
                        status = "Final";
                    }
                else if(media < 50)
                    {
                      status = "Reprovado";   
                    }

                    console.log("Nome: "+students[i].name);
                    console.log("Média: "+media);
                    console.log("Situação: "+status);

                
            }
  
    }
} 
    var matricula = process.argv[2];

    getStudentsituation(matricula); 