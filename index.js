import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"

const cliente1 = new Cliente('Ricardo', 11122233309)

const cliente2 = new Cliente('Alice', 88822233309)

const conta1 = new ContaCorrente(cliente1, 1001)

const conta2 = new ContaCorrente(cliente2, 102)

const poupanca = new ContaPoupanca(50, cliente2, 102)

conta1.depositar(200)
conta2.depositar(400)

console.log(poupanca, conta1, conta2)