import Fonts from './fonts';
import Quotes from './quotes';
import Colors from './colors';

export const randomQuotte = () => {
	const quote = Quotes[Math.floor(Math.random()*Quotes.length)];
	const font = Fonts[Math.floor(Math.random()*Fonts.length)];
	const color = Colors[Math.floor(Math.random()*Colors.length)];	
	
	const quotte = {
		quote,font,color
	};

	return quotte;
};
export const findCombination = (...params) => {
	const { primary , secondary , background , font , quote } = params;
	console.log(params)
}