import React, { Component, Fragment } from 'react'

import Masonry from "masonry-layout"
import imagesLoaded from 'imagesloaded';

import "./gallery.css"

import Tab from "./Tab.js"
import Tabs from "./Tabs.js"
import ModalSlider from './ModalSlider.js';



export default class Gallery extends Component{
	constructor(props){
		super(props);
		this.state = {
			activeTabIndex: 0,
			modalSlider: null
		}

		this.grid = null;
		this.msnry = null;
	}

	handleTabClick(tabIndex){
        this.setState({ activeTabIndex: tabIndex });
    }

    handleImgClick(e){
    	var src = e.target.getAttribute("src");
    	this.setState({
    		modalSlider: src
    	})
    }

	componentDidMount(){
		this.grid = document.getElementsByClassName("grid")[0];
		this.msnry = new Masonry(this.grid, {
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true,
			gutter: '.gutter-sizer'
		});

		var imgLoad = imagesLoaded(this.grid);
		imgLoad.on( 'always', () => this.msnry.layout() );
	}

	componentDidUpdate(){
		this.componentDidMount();
	}


	shouldComponentUpdate(np, ns){
        if(ns.activeTabIndex !== this.state.activeTabIndex) return true;
        if(ns.modalSlider !== this.state.modalSlider) return true;
        return false;
    }

    modalClose(e){
    	this.setState({ modalSlider: null });
    }

	tabContent(folder){
		var this_ = this;
		var arrOfImg = emulateServerResponse(folder);
		var imgs = arrOfImg.map(function(item, index){
			return <div className="grid-item" key={index}><img src={item} alt="#" onClick={(e) => this_.handleImgClick(e)}/></div>
		})
		return(
			<Fragment>
				<div className="grid-sizer"></div>
				<div className="gutter-sizer"></div>
				{imgs}
			</Fragment>
		)
	}


	render(){
		var modal = this.state.modalSlider !== null ? 
		<ModalSlider close={(e) => this.modalClose(e)} src={this.state.modalSlider}/> : null

		return(
			<main className="gallery">
				{modal}
				<h1>Gallery</h1>
				<Tabs activeTabIndex={this.state.activeTabIndex} handleTabClick={(tabIndex) => this.handleTabClick(tabIndex)}>
					<Tab label="Painting. Canvas, acrylic">
						{this.tabContent("painting")}
					</Tab>
					<Tab label="Walls. English acrylic">
						{this.tabContent("walls")}
					</Tab>
					<Tab label="Painting with molding. English acrylic">
						{this.tabContent("painting_molding")}
					</Tab>
					<Tab label="Special">
						{this.tabContent("special")}
					</Tab>
				</Tabs>
			</main>					
		)
	}
}

function emulateServerResponse(folder){

	var response = [];
	if(folder === "painting"){
		for(let i = 1; i <= 19; i++){
			response.push("content/painting/" + i + ".jpg");
		}
	}
	if(folder === "walls"){
		for(let i = 1; i <= 37; i++){
			response.push("content/walls/" + i + ".jpg");
		}
	}
	if(folder === "painting_molding"){
		for(let i = 1; i <= 13; i++){
			response.push("content/painting_molding/" + i + ".jpg");
		}
	}
	if(folder === "special"){
		for(let i = 1; i <= 7; i++){
			response.push("content/special/" + i + ".jpg");
		}
	}
	return response;
}