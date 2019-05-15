import React from 'react'

export default function Socials(props){
	return(
		<div className={props.className}>
			<a href="https://vk.com/id265656704" target="_blank" rel="noopener noreferrer">
				<img src="content/vk.png" alt="link to vk"/>
			</a>
			<a href="https://www.instagram.com/aliemenadieva/" target="_blank" rel="noopener noreferrer">
				<img src="content/instagram.png" alt="link to instagram"/>
			</a>
		</div>
	)
}