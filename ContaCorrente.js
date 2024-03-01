export class ContaCorrente {
    agencia;
    cliente;


    _saldo = 0; // é privado por boa prática, mas tbm não é oficial
    // #saldo = 0 => privado, mas ainda não foi aprovado

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