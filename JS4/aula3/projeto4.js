//verifica velocidade

// velocidade maxima de 70km
//a cada 5km do limite voce ganha 1 ponto
//caso pontos maior que 12 -> carteira suspendida

verificarVelocidade(150)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const kmPorPonto = 5
    if (velocidade <= velocidadeMaxima)
        console.log('OK')
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima)/kmPorPonto))
        if (pontos >= 12)
            console.log('carteira suspensa')
        else
        console.log('pontos', pontos)
    }
}