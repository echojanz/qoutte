import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Helmet from 'preact-helmet';

import Header from './header';
import Home from '../routes/home';

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};
	render() {
		return (
			<div id="app">
				<Helmet
					meta={[
						{ name: 'viewport',content: 'width=device-width, initial-scale=1.0' }
					]}
					link={[
						{
							rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.2/css/materialize.min.css'
						}
					]}
					script={[
						{src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.2/js/materialize.min.js' }
					]}
				/>
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
				</Router>
			</div>
		);
	}
}
