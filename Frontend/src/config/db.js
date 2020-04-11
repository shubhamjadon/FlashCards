const url = 'http://localhost:8080/api/';
let db = {
	getCards: (cb) => {
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				cb(data);
			});
	},
	addCard: (card,cb) => {
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(card),
		})
			.then(() => {
				cb();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	},
	deleteCard: (id, cb) => {
		fetch(url+id, { //this value will be sent in params
			method: 'DELETE',
		})
			.then( ()=> {
				cb();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	},
	updateCard: (card, cb) => {
		fetch(url+card.id, {
			method: 'PUT',
			headers: {
				'Content-Type' : 'application/json',
			},
			body: JSON.stringify(card)
		})
			.then( ()=> {
				cb();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
};

export default db;