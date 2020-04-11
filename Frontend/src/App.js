import React, { Component } from 'react';
import CardList from './components/CardList';
import Form from './components/Form' ;
import db from './config/db';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			form: false,
			btn_msg: 'ADD',
			blur: false,
			edit: false,
			editIndex: -1,
			AddOrEdit: 'ADD',
			color: 'btn-info'
		};
		this.question = React.createRef();
		this.answer = React.createRef();
        
	}
    
	changeCardState(cards){
		this.setState({ cards });
	}

	componentDidMount() {
		db.getCards((cards)=>this.changeCardState(cards));
	}
	
    
	addCard() {
		let cards = this.state.cards.slice();
		if(this.state.edit){
			const data = {
				id: cards[this.state.editIndex]._id,
				question: this.question.current.value,
				answer: this.answer.current.value,
				show: false,
				color: this.state.color
			};

			db.updateCard(data,() => db.getCards((cards) => this.changeCardState(cards)));
			this.toggleForm();
			this.setState({AddOrEdit: 'ADD'});
		}
		else{
			const data = {
				question: this.question.current.value,
				answer: this.answer.current.value,
				show: false,
				color: this.state.color
			};
    
			db.addCard(data,() => db.getCards((cards) => this.changeCardState(cards)));
		}
		
		this.setState({ cards: cards }, () => {
			this.question.current.value = '';
			this.answer.current.value = '';
		});
	}

	updateCard(index) {
		const cards = this.state.cards.slice();
		for(let i = 0; i < cards.length; i++){
			cards[i].show = false;
		}
		cards[index].show = true;
		this.setState({cards});
	}
    
	toggleForm() {
		let btn_msg, form, blur;
		if(this.state.edit && this.state.form){
			this.setState({AddOrEdit: 'ADD'});
			this.question.current.value = '';
			this.answer.current.value = '';
			this.setState({edit: false});
		}
        
		btn_msg = (this.state.form) ?  'ADD': 'CLOSE';
		form = (this.state.form) ? false : true;
		blur = (this.state.form) ? false : true;
        
		this.setState({form, btn_msg, blur});
	}
    
	deleteCard(id) {
		db.deleteCard(id, () => db.getCards((cards) => this.changeCardState(cards)));
	}
    
	editCard(index) {
		this.setState({edit: true, editIndex: index, AddOrEdit: 'Edit', color: this.state.cards[index].color}, this.toggleForm);
		this.question.current.value = this.state.cards[index].question;
		this.answer.current.value = this.state.cards[index].answer;
	}
    
	setColor(color) {
		this.setState({color});
	}

	render() {
		return (
			<div className="parent container-fluid">
				<button className="fixed-bottom btn-float btn btn-circle btn-xl btn-info" onClick={()=>this.toggleForm()}><i className="material-icons">note_add</i></button>

				<Form data={this.state} question={this.question} answer={this.answer} addCard={() => this.addCard()} setColor={(color) => this.setColor(color)} />
				<CardList data={this.state} updateCard={(index) => this.updateCard(index)} deleteCard={(index) => this.deleteCard(index)} editCard={(index) => this.editCard(index)} />
			</div>
		);
	}
}