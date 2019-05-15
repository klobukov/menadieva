import React from 'react'
import './footer.css'
import Socials from '../Socials'

export default class Footer extends React.Component{
	render(){
		return(
			<footer className="footer">
				<div>Tel.: +7978 828 5016</div>
				<div>email: alrushen@mail.ru</div>
				<Socials className="footer-socials"/>
			</footer>
		)
	}
}