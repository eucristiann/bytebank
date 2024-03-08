import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor('Cristian', 10000, 12345678900)
diretor.cadastrarSenha('1234')
const gerente = new Gerente('Rafael', 5000, 32165498700)

const estaLogado = SistemaAutenticacao.login(diretor, '1234')

console.log(estaLogado)