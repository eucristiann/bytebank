import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente()
cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233309

const cliente2 = new Cliente()
cliente2.nome = 'Alice'
cliente2.cpf = 88822233309

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.cliente = cliente1
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.depositar(100)
console.log(contaCorrenteRicardo)

const contaCorrenteAlice = new ContaCorrente()
contaCorrenteAlice.cliente = cliente2
contaCorrenteAlice.agencia = 102
contaCorrenteAlice.depositar(500)
console.log(contaCorrenteAlice)
contaCorrenteAlice.transferir(100, contaCorrenteRicardo)
console.log(contaCorrenteRicardo, contaCorrenteAlice)

