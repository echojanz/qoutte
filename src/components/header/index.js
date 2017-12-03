import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Logo from '../../assets/logo.svg';
import style from './style';

export default class Header extends Component {

	componentDidMount() {

	}

	render() {
		return (
			<header class={style.header}>
				<nav>
					<Link href="/">
						<svg width="25px" height="32px" viewBox="0 0 25 32">
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="Desktop" transform="translate(-69.000000, -69.000000)" fill-rule="nonzero" fill="#1C7DE5">
									<path d="M69.25,81.5676341 C69.25,74.7647926 74.7647926,69.25 81.5676341,69.25 C88.3704756,69.25 93.8852683,74.7647926 93.8852683,81.5676341 C93.8852683,89.0777498 90.9408066,94.3224368 81.9991082,100.611562 C81.5554366,100.923618 81.0830526,100.702968 80.8911632,100.34578 C80.8397891,100.25015 80.8157335,100.164819 80.8008133,100.077494 C80.7864101,99.9965193 80.778499,99.9047072 80.773281,99.7874924 C80.7652654,99.607431 80.7637685,99.3539016 80.7677009,99.0181938 C80.7736977,98.5062482 80.78582,98.0467139 80.8252088,96.7172817 C80.8277519,96.6314169 80.8277519,96.6314169 80.8302885,96.54552 C80.864665,95.3801463 80.8800251,94.7432825 80.8835207,94.20303 C80.8843207,94.0793764 80.8843417,93.9671086 80.8835781,93.8665949 C74.3989146,93.5116452 69.25,88.1409364 69.25,81.5676341 Z M92.3852683,81.5676341 C92.3852683,75.5932198 87.5420485,70.75 81.5676341,70.75 C75.5932198,70.75 70.75,75.5932198 70.75,81.5676341 C70.75,87.5420485 75.5932198,92.3852683 81.5676341,92.3852683 C81.9632772,92.3852683 82.1620494,92.5970499 82.2745816,92.8571952 C82.3073402,92.9329246 82.3256836,93.0023921 82.339567,93.0795591 C82.3550575,93.1656584 82.3646488,93.2655463 82.3713872,93.3895379 C82.3821492,93.5875649 82.3857716,93.8599878 82.3834893,94.2127352 C82.3798925,94.7686305 82.364365,95.4124379 82.3296363,96.5897483 C82.3270959,96.6757744 82.3270959,96.6757744 82.3245509,96.7617047 C82.2974101,97.6777454 82.2833113,98.1777805 82.275273,98.5650713 C89.9334405,92.922607 92.3852683,88.249357 92.3852683,81.5676341 Z" id="Oval" />
								</g>
							</g>
						</svg>
					</Link>
				</nav>
			</header>
		);
	}
}
