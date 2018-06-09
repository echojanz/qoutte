import { h, Component } from 'preact';
import style from './style.css';
import WebFont from 'webfontloader';

export default class Quotte extends Component {
	state = {
		font: null,
		quotte: this.props.quotte
	}
	random(){

	}
	componentWillMount(){
	}

	componentDidMount(){
	}
	componentWillUpdate(e,a){
		const self = this;
		const quotte = self.state.quotte;
		WebFont.load({
			google: {
				families: [quotte.font.name]
			},
			active: () => {
				this.setState({
					font: quotte.font.name
				});
			}
		});
		document.body.style.background = quotte.color.background;
	}
	
	render({},{ quotte }) {
		let font = quotte.font.name;
		font.indexOf(':') > -1 ? font = font.slice(0,font.indexOf(':')) : '';
		return (
			<div
				//eslint-disable-next-line
				onClick={()=>this.random()} class={style.center} style={{ fontFamily: font,color: quotte.color.primary }}>
				{quotte.quote.quote}<br />
			</div>
		);
	}
}
