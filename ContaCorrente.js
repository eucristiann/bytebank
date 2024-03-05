import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0
    agencia;
    _cliente;
    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    _saldo = 0; // é privado por boa prática, mas tbm não é oficial
    // #saldo = 0 => privado, mas ainda não foi aprovado

    constructor(agencia, cliente) {
        this.agencia = agencia
        this._cliente = cliente
        ContaCorrente.numeroDeContas += 1
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor) {
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor) {
        if(valor > 0){
            this._saldo += valor
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}