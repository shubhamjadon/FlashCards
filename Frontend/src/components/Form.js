import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
	render(){
		const {question} = this.props;
		const {answer} = this.props;
		const {form, AddOrEdit} = this.props.data;
		const {addCard} = this.props;
        

		return (
			<div className="input shadow-lg p-3 mb-5 bg-white rounded" style={{ display: (form) ? 'block' : 'none' }}>
				<div className="form-group">
					<label htmlFor="question">Question</label>
					<input className="form-control" id="question" ref={question}/>
				</div>
				<div className="form-group">
					<label htmlFor="answer">Answer</label>
					<textarea className="form-control" aria-label="With textarea" id="answer" ref={answer} />
				</div>
				<div className="form-group">
					<label>Color</label>
					<div className="mb-5 mt-3">
						<span className="ch-cl btn mr-3 btn-danger" onClick={ () => this.props.setColor('btn-danger')}></span>
						<span className="ch-cl btn mr-3 btn-warning" onClick={ () => this.props.setColor('btn-warning')}></span>
						<span className="ch-cl btn mr-3 btn-success" onClick={ () => this.props.setColor('btn-success')}></span>
						<span className="ch-cl btn mr-3 btn-primary" onClick={ () => this.props.setColor('btn-primary')}></span>
						<span className="ch-cl btn mr-3 btn-info" onClick={ () => this.props.setColor('btn-info')}></span>
						{/* <span className="ch-cl btn mr-3 btn-secondary" onClick={ () => this.props.setColor('btn-secondary')}></span> */}
					</div>
				</div>
				<button type="submit" className={`btn btn-block ${this.props.data.color}`} onClick={() => addCard()}>{AddOrEdit}</button>
			</div>
		);
        
	}
}
