import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

export default class ModalSlider extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentSrc: this.props.src
		}
		this.root = null;
		this.srcArr = [];
		this.currentSrcNum = null;
	}

	componentWillMount(){
		this.root = document.createElement('div');
		document.body.appendChild(this.root);
		this.root.classList.add("gallery__modal-slider-cont");
	}

	componentWillUnmount(){
		document.body.removeChild(this.root);
	}

	componentDidMount(){
		var imgs = document.querySelectorAll(".grid-item img");
		for(var i = 0; i < imgs.length; i++){
			this.srcArr.push(imgs[i].getAttribute("src"));
			if(imgs[i].getAttribute("src") === this.state.currentSrc) this.currentSrcNum = i;
		}
	}

	handleArrowClick(direction){
		var next = null;
		if(direction === "next"){
			if(this.currentSrcNum + 1 < this.srcArr.length){
				next = this.srcArr[this.currentSrcNum + 1];
				this.currentSrcNum = this.currentSrcNum + 1;
			} else {
				next = this.srcArr[0];
				this.currentSrcNum = 0;
			}
		} else {
			if(this.currentSrcNum - 1 < 0){
				next = this.srcArr[this.srcArr.length - 1];
				this.currentSrcNum = this.srcArr.length - 1;
			} else {
				next = this.srcArr[this.currentSrcNum - 1];
				this.currentSrcNum = this.currentSrcNum - 1;
			}
		}
		this.setState({
			currentSrc: next
		});
	}

	render(){
		return ReactDOM.createPortal(
			<Fragment>
				<div className="gallery__modal-cloack" onClick={this.props.close}></div>
				<img src={this.state.currentSrc} alt="#" className="gallery__modal-slider" onClick={() => this.handleArrowClick("next")}/>
				<div className="gallery__nextSrc" onClick={() => this.handleArrowClick("next")}></div>
				<div className="gallery__prevSrc" onClick={() => this.handleArrowClick("prev")}></div>
				<div className="gallery__close" onClick={this.props.close}></div>
			</Fragment>,
			this.root
		)
	}
}