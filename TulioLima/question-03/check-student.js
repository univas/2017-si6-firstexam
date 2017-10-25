const students =  require('./studentsDB.json')

filter(process.argv[2]);

function filter(id){
            var soma = 0;
            var student = students[id-1];
            console.log(student.id);   
            console.log(student.name);
            console.log(student.grades);
            for(var i = 0; i < 4;i++){
                var soma = soma + student.grades[i];
                console.log(""+student.grades[i]);    
            }
            console.log("SOMA " + soma);                                
}


//for (var i = 0; i < students.length; i++){
 //               
//            }

