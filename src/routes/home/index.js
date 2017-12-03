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
		if (!location.search){
			const quotte = randomQuotte();
			this.setState({ quotte });
		}
		else {
			let quotte = location.search.slice(1).split('&').map(prop => prop.split('=')).reduce((acc, [key, val]) => ({ [decodeURIComponent(key)]: decodeURIComponent(val), ...acc }), {});
			console.log(quotte);
			this.setState({
				quotte: {
					color: {
						primary: quotte.primary,
						secondary: quotte.secondary,
						background: quotte.background
					},
					font: {
						name: quotte.font
					},
					quote: {
						quote: quotte.quote
					}
				}
			});
		}
		setTimeout( () => {
			const main = document.getElementById('main');
			main.className = main.className.replace(' scale-out',' scale-in');
		},0);
	}
	
	render({},{ quotte , refresh  }) {
		return (
			<div id="main" class={style.valign + ` scale-transition scale-out`}
			//eslint-disable-next-line
			onClick={(event)=>this.random(event)}>
				<Quotte quotte={quotte} />
				<Footer quotte={quotte} />
			</div>
		);
	}
}
