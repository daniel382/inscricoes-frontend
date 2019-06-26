class InscricaoServices {
	api = 'http://192.168.0.1:3005/api/inscricoes'
	apiLAB = 'http://10.0.2.1:3005/api/inscricoes'
	devAPI = 'http://127.0.0.1:3001/api/inscricoes'

	getCEP(cep) {
		if(cep.length === 9)
			return fetch(`https://viacep.com.br/ws/${ cep.replace('-', '') }/json/`)
	}

	post(candidato, lab = false) {
		candidato.pontuar()

		const api = this.devAPI // lab ? this.apiLAB : this.api
		const config = {
			method: 'post',
			body: JSON.stringify(candidato),
			headers: { 'Content-Type': 'application/json' }
		}

		return fetch(api, config)
	}

	getAll(params) {
		if(params) return fetch(`${this.devAPI}?${params}`)

		return fetch(this.devAPI)
	}

	getById(id) {
		return fetch(`${this.devAPI}/${id}`)
	}

	updateOne(candidato) {
		const id = candidato._id
		const config = {
			method: 'put',
			body: JSON.stringify(candidato),
			headers: { 'Content-Type': 'application/json' }
		}

		return fetch(`${this.devAPI}/${id}`, config)
	}
}

export default new InscricaoServices()