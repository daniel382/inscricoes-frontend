class InscricaoServices {
	api = 'http://192.168.0.1:3005/api/inscricoes'
	apiLAB = 'http://10.0.2.1:3005/api/inscricoes'

	getCEP(cep) {
		if(cep.length === 9)
			return fetch(`https://viacep.com.br/ws/${ cep.replace('-', '') }/json/`)
	}

	async post(candidato, lab) {
		candidato.pontuar()
		const api = lab ? this.apiLAB : this.api
		const config = {
			method: 'post',
			body: JSON.stringify(candidato),
			headers: { 'Content-Type': 'application/json' }
		}

		return await fetch(api, config) //mudar para axios
	}
}

export default new InscricaoServices()