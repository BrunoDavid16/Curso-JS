// Seleciona o campo de entrada, a lista de opções e a área de resultados no HTML
let num = document.querySelector('input#txtn') // Campo para digitar o número
let lista = document.querySelector('select#flista') // Lista para exibir os números adicionados
let res = document.querySelector('div#res') // Div onde serão exibidos os resultados
let valores = [] // Array para armazenar os números adicionados

// Função para verificar se o número digitado está no intervalo de 1 a 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { // Converte o valor para número e verifica o intervalo
        return true
    } else {
        return false
    }
}

// Função para verificar se o número já foi adicionado à lista
function isLista(n, l) {
    if (l.indexOf(Number(n)) !== -1) { // Verifica se o número já existe no array
        return true
    } else {
        return false
    }
}

// Função para adicionar um número à lista
function Adicionar() {
    // Verifica se o número é válido e ainda não está na lista
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value)) // Adiciona o número ao array
        let item = document.createElement('option') // Cria um elemento <option> para exibir na lista
        item.text = `Valor ${num.value} adicionado` // Define o texto do item
        lista.appendChild(item) // Adiciona o item à lista no HTML
        res.innerHTML = '' // Limpa os resultados (se já tiverem sido exibidos)
    } else {
        // Alerta caso o número seja inválido ou já esteja na lista
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Limpa o campo de entrada
    num.focus() // Coloca o cursor no campo de entrada novamente
}

// Função para finalizar e exibir os resultados
function Finalizar() {
    // Verifica se há números na lista
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else { 
        let tot = valores.length // Total de números cadastrados
        let maior = valores[0] // Inicializa o maior valor com o primeiro elemento do array
        let menor = valores[0] // Inicializa o menor valor com o primeiro elemento do array
        let soma = 0 // Variável para somar todos os valores
        let media = 0 // Variável para calcular a média dos valores

        // Percorre o array para calcular maior, menor e soma
        for (let pos in valores) {
            soma += valores[pos] // Soma os valores do array
            if (valores[pos] > maior) maior = valores[pos] // Atualiza o maior valor
            if (valores[pos] < menor) menor = valores[pos] // Atualiza o menor valor
        }

        // Calcula a média
        media = soma / tot

        // Exibe os resultados na div "res"
        res.innerHTML = '' // Limpa os resultados anteriores
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` // Total de números
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` // Maior valor
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>` // Menor valor
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>` // Soma de todos os valores
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>` // Média dos valores
    }
}
