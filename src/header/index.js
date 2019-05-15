import React, { Component } from 'react'
import './header.css'
import Socials from '../Socials'

export default class Header extends Component{
	render(){
		return(
			<header className="header">
				<div className="photo_and_nav">
					<div className="photo_and_nav-photo">
						<img src="content/author_photo.jpg" alt="author"/>
					</div>
					<Socials className="photo_and_nav-nav"/>
				</div>
				<div className="biography">
					<h1>Biography</h1>
					<div className="biography_text">Menadieva Alie Rustamovna was born in 1973 in Shahrisabz city UzSSR in teachers’ family.
							From my childhood I like drawing. My drawing-pad and a pencil were my constant satellites.
							In 1990 I entered Politechnical Univercity, but my love to drawing prevailed.
							I did not work as a specialist not a day, but to my calling I have been working all my life.
							Thank god for my ability to see the perfection of a nature, to wonder and enjoy every grass,
							every petal, every day. I like to draw still life with flowers, where every flower expresses your mood,
							the joy of a bright summer and the light sadness of an autumn.
							When you are one 40s you understand the spinning of the life,
							transience of time and you appreciate every moment and draw it with bright colors,
							which your soul is only able. I like to give joy to people,
							when they could appear in a Praga’s street with a temple view not going out of their homes,
							or sit on a bank of a lake Komo in Varenie, or walk through Crimean’s trails.<br/>
							2008- exhibition in ‘Dom Oficerov’<br/>
							2010 Sevastopol-exhibition in ‘KIC’<br/>
							2014- exhibition in Simferopol
					</div>
				</div>
			</header>
		)
	}
}