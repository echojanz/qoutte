import { h, Component } from 'preact';
import { randomQuotte } from '../../api/api';
import { route } from 'preact-router';

import style from './style.css';

import Quotte from '../../components/quotte';
import Footer from '../../components/footer';


export default class Home extends Component {
	state = {
		quotte: {}
	}

	random(event){
		if (!location.search){
			if (event.target.tagName === 'svg'){
				return false;
			}
			const main = document.getElementById('main');
			main.className = main.className.replace(' scale-in',' scale-out');
			this.setState({ quotte: null });
			setTimeout(() => {
				this.setState({ quotte: randomQuotte() });
				main.className = main.className.replace(' scale-out',' scale-in');
			}, 250);
		}
	}
	componentWillMount(){
	}
	
	render({},{ quotte , refresh  }) {
		return (
			<div id="main"
			//eslint-disable-next-line
			onClick={(event)=>this.random(event)}>
				<Quotte quotte={quotte} />
				<Footer quotte={quotte} />
			</div>
		);
	}
}
