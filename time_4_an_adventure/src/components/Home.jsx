import React, { Component } from 'react';
import skills from '../json/skills.json';
import '../css/Home.css';

export class Home extends Component {
	render() {
		return (
			<div class="page">
				{skills.map((item) => (
					<div key={item.name} class="skill">
						<span>Name: {item.name}</span>
						<br />
					</div>
				))}
			</div>
		);
	}
}

export default Home;
