import { h, Component } from 'preact';
import style from './style.css';

export default class Footer extends Component {

	modal() {
		const elem = document.querySelector('.modal');
		const instance = new M.Modal(elem,{
			opacity:0
		});
		const modal = document.getElementById('modal1');
		modal.style.background = this.props.quotte.color.primary;
		modal.style.color = this.props.quotte.color.background;
		instance.open();
	}

	componentWillMount() {
	}
	componentWillUnmount() {
		instance.destroy();
	}

	render() {
		const quotte = this.props.quotte;
		let font = quotte.font.name;
		font.indexOf(':') > -1 ? font = font.slice(0,font.indexOf(':')) : '';
		return (
			<div id="footer" class={style.footer}>
				<svg width="30px" height="30px" viewBox="0 0 30 30" onClick={() => this.modal()}>
					<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						{/* fill="#" */}
						<g id="Desktop" transform="translate(-1340.000000, -924.000000)" fill-rule="nonzero" fill="#1C7DE5">
							<g id="Group" transform="translate(1340.000000, 924.000000)">
								<path d="M15,30 C6.71428571,30 0,23.2857143 0,15 C0,6.71428571 6.71428571,0 15,0 C23.2857143,0 30,6.71428571 30,15 C30,23.2857143 23.2857143,30 15,30 Z M15,1.42857143 C7.5,1.42857143 1.42857143,7.5 1.42857143,15 C1.42857143,22.5 7.5,28.5714286 15,28.5714286 C22.5,28.5714286 28.5714286,22.5 28.5714286,15 C28.5714286,7.5 22.5,1.42857143 15,1.42857143 Z" id="Shape" />
								<g transform="translate(13.928571, 8.214286)">
									<path d="M1.07142857,13.5714286 C0.678571429,13.5714286 0.357142857,13.25 0.357142857,12.8571429 L0.357142857,4.64285714 C0.357142857,4.25 0.678571429,3.92857143 1.07142857,3.92857143 C1.46428571,3.92857143 1.78571429,4.25 1.78571429,4.64285714 L1.78571429,12.8571429 C1.78571429,13.25 1.46428571,13.5714286 1.07142857,13.5714286 Z" id="Shape" />
									<g>
										<circle id="Oval" cx="1.07142857" cy="1.07142857" r="1" />
										<path d="M1.07142857,2.14285714 C0.464285714,2.14285714 0,1.67857143 0,1.07142857 C0,0.464285714 0.464285714,0 1.07142857,0 C1.67857143,0 2.14285714,0.464285714 2.14285714,1.07142857 C2.14285714,1.67857143 1.67857143,2.14285714 1.07142857,2.14285714 Z M1.07142857,0.714285714 C0.857142857,0.714285714 0.714285714,0.857142857 0.714285714,1.07142857 C0.714285714,1.28571429 0.857142857,1.42857143 1.07142857,1.42857143 C1.28571429,1.42857143 1.42857143,1.28571429 1.42857143,1.07142857 C1.42857143,0.857142857 1.28571429,0.714285714 1.07142857,0.714285714 Z" id="Shape" />
									</g>
								</g>
							</g>
						</g>
					</g>
				</svg>

				<div id="modal1" class={style.modal+` modal row`}>
					<div class={style.valign + ` modal-content`}>
						<div class={style.center}>
							<div class={style.fontSize + ` col s12`}>
								{font}
							</div>
							<br />
							<div class="col s12 m4">
								<div><div style={{backgroundColor:quotte.color.primary}} class={style.circle}></div><span class={style.font}>{quotte.color.primary}</span></div>
							</div>
							<div class="col s12 m4">
								<div style={{backgroundColor:quotte.color.secondary}} class={style.circle}></div><span class={style.font}>{quotte.color.secondary}</span>
							</div>
							<div class="col s12 m4">
								<div style={{backgroundColor:quotte.color.background}} class={style.circle}></div><span class={style.font}>{quotte.color.background}</span>
							</div>
						</div>
					</div>
					<div class="modal-footer" style={{background: 'transparent', position: 'fixed', bottom: '0'}}>
						<div class="col s12 center">
						 <a style={{ color: quotte.color.background }} href="https://twitter.com/echojanz" target="_blank">echojanz</a> & <a style={{ color: quotte.color.background }} href="https://twitter.com/uur_oruc" target="_blank">uur_oruc</a>
							<a href="#!" class="modal-close right" style={{marginRight: '3em',marginBottom: '3em' }}><img src="../../assets/close.svg"/></a>
						</div>
					</div>
				</div>

			</div>
		);
	}
}
