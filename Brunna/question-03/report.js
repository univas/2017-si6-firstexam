let x = process.argv[2]
let nota1 = process.argv[3]
let nota2 = process.argv[4]
let nota3 = process.argv[5]
let nota4 = process.argv[6]

media = -((nota1+nota2+nota3+nota4)/4)

if(media >= 60){
    console.log("o aluno" + media + "Aprovado")
}else{
    if(media >= 50){
        console.log("o aluno"+ media + "Final")
    }else{
        console.log("o aluno"+ media + "Reprovado")
    }
}
