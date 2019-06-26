class EnderecoModel {
	rua = ''
	numero = ''
	bairro = ''
	cep = ''
	pontoReferencia = ''
	detalhes = ''
}

class ContatoModel {
	telefone1 = ''
	telefone2 = ''
	telefone3 = ''
}

class EscolarModel {
	escola = ''
	notaPortugues = ''
	notaMatematica = ''
	questionario = ''
	frequencia = ''
}

class CandidatoModel {
	nome = ''
	nomeMae = ''
	nomePai = ''
	rg = ''
	dataNascimento = ''
	sexo = ''
	naturalidade = ''
	rendaFamiliar = ''
	ptr = ''
	moradia = ''
	moradiaDetalhes = ''
	publicidade = ''
	observacoes = ''
	classificado = false
	pontuacao = ''
	colocacao = 0

	endereco = new EnderecoModel()
	contato = new ContatoModel()
	escolar = new EscolarModel()

	pontuar() {
        const portugues = parseFloat(this.escolar.notaPortugues)
        const matematica = parseFloat(this.escolar.notaMatematica)
        const questionario = parseFloat(this.escolar.questionario)
        const frequencia = parseFloat(this.escolar.frequencia)
        
        this.pontuacao = ((portugues + matematica + questionario + ( frequencia / 10 )) / 4).toFixed(3)
	}

	validar() {
		return Boolean(
			this.nome && this.nomeMae && this.nomePai && this.dataNascimento &&
			this.rg && this.naturalidade && this.sexo && (this.rendaFamiliar >=0) &&
			this.endereco.rua && this.endereco.bairro && this.endereco.cep && this.endereco.numero &&
			this.endereco.pontoReferencia && this.contato.telefone1 && this.escolar.escola &&
			this.escolar.notaPortugues && this.escolar.notaMatematica && this.escolar.frequencia &&
			this.escolar.questionario
		)
	}
}

export default CandidatoModel