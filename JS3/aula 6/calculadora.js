function calculadora(){
    const operacao = Number(prompt('Escolha uma operacao:\n 1-Soma (+)\n 2-Subtracao(-)\n 3- Multiplicacao(*)\n 4-Divisao(/)\n 5- Divisao Inteira(%)\n 6- Potenciacao(**)'))

    let n1 = Number(prompt('Insira o primeiro valor:'))
    let n2 = Number(prompt('Insira o segundo valor:'))
    let resultado

    function soma(){
        resultado = n1 + n2
        alert(`${n1}+${n2} é ${resultado}`)
    }

    function subtracao(){
        resultado = n1 - n2
        alert(`${n1}-${n2} é ${resultado}`)
    }

    function multiplicacao(){
        resultado = n1 * n2
        alert(`${n1}X${n2} é ${resultado}`)
    }

    function divisao(){
        resultado = n1 / n2
        alert(`${n1}/${n2} é ${resultado}`)
    }

    function divisaoInteira(){
        resultado = n1 % n2
        alert(`O resto da divisao entre ${n1}e${n2} é ${resultado}`)
    }

    function potenciacao(){
        resultado = n1 ** n2
        alert(`${n1}^${n2} é ${resultado}`)
    }

    if(operacao == 1){
        soma()
    } else if (operacao == 2){
        subtracao()
    } else if(operacao == 3){
        multiplicacao()
    } else if(operacao == 4){
        divisao()
    }else if(operacao == 5){
        divisaoInteira()
    }else if(operacao == 6) {
        potenciacao()
    }
}
calculadora()