const alunos = [
    {
        nome: "Marina",
        n1: 5,
        n2: 7,
    },
    {
        nome: "Angela",
        n1: 7,
        n2: 9,
    },
    {
        nome: "Gabriel",
        n1: 3,
        n2: 5,
    },
    {
        nome: "Guilherme",
        n1: 10,
        n2: 10,
    },
];

function media (n1, n2) {
    return (( n1 + n2 ) / 2).toFixed(2)
}

function printMedia(aluno) {
    return `A média do(a) aluno(a) ${aluno.nome} é: ${media(aluno.n1, aluno.n2)}`;
}

function printAlunoMsg (aluno) {
    if (media >=7) {
        return `Parabéns, ${aluno.nome}! Você foi aprovado(a) no concurso!`;
    } else {
        return `Não foi dessa vez, ${aluno.nome}! Tente novamente!`;
    }
}

for (let aluno of alunos) {
    let alunoMedia = printMedia(aluno);
    let alunoMsg = printAlunoMsg(aluno);

    alert(`${alunoMedia}\n${alunoMsg}`)
}

