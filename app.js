var num = document.getElementById('num')
var an = document.getElementById('lista')
var res = document.getElementById('resultados')
var soma = 0

var valores = []

function adicionar(){
    let n = Number(num.value)
    if (n > 100 || valores.indexOf(n) > -1) {
        alert('Ovalor é inválido ou já se encontra na lista. Tente novamente!')
    } else {
        soma += n
        valores.push(n)
        var item = document.createElement('option')
        item.text += `O valor ${n} foi adicionado`
        an.appendChild(item)
    }
    num.value = ''
}

function analisar(){
    valores.sort()
    res.innerHTML += `Ao todo temos ${valores.length} números cadastrados<br>`
    res.innerHTML += `O maior valor informado foi ${valores[valores.length-1]}<br>`
    res.innerHTML += `O menor valor informado foi ${valores[0]}<br>`
    res.innerHTML += `Somando todos os valores temos ${soma}<br>`
    res.innerHTML += `A média dos valores digitados é ${soma / valores.length}<br>`
}