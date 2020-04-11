import React, { Component } from 'react';
import './CardList.css';

export default class CardList extends Component {

    

	render() {
		const items1 = [];
		const items2 = [];
		const items3 = [];
		const items4 = [];
		let j = 0;
        
		this.props.data.cards.forEach((card, index) => {
			let ele = <div className="card" key={index}>
				<div className={`card-header ${card.color}`}>
					<i className="material-icons" onClick={ () => this.props.editCard(index)}>edit</i>
					<i className="material-icons float-right" onClick={ () => this.props.deleteCard(card._id)}>delete</i>
				</div>
				<div className={`card-body ${card.color}`} onClick={() => this.props.updateCard(index)}>
					<h5 className="card-title">{card.question}</h5>
					<p className="card-text" style={{ display: (card.show) ? 'block' : 'none' }}>{card.answer}</p>
				</div>
			</div>;
			if(j == 0){
				items1.push(ele);
				j++;
			}
			else if(j == 1){
				items2.push(ele);
				j++;
			}
			else if(j == 2){
				items3.push(ele);
				j++;
			}
			else{
				items4.push(ele);
				j = 0;
			}
		});

		return (
			<div className="cardsList" style={{ filter: (this.props.data.blur) ? 'blur(5px)' : 'blur(0px)' }}>
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3">
						{items1}
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						{items2}
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						{items3}
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						{items4}
					</div>
				</div>
			</div>
		);
	}
}
