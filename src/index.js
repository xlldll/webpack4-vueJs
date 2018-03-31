import _ from 'lodash';
import './style.css';
import MyImage from './my-image.png';
import Data from './data.xml';
//import printMe from './print.js';
import {cube} from './math.js';
import Text from './text.js';
import numRef from './ref.json';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

function component() {
	var element = document.createElement('div');
	//	var element = document.createElement('pre');
	var br = document.createElement('br');
	// Lodash, now imported by this script
	//	element.innerHTML = _.join(['yes', 'webpack', '123456789'], ' ');
		element.innerHTML = join(['yes', 'webpack', '123456789'], ' ');
	//	element.classList.add('hello');
//	 this.alert('Hmmm, this probably isn\'t a great idea...')
//	element.innerHTML = [
//		'Hello',
//		'5cube is equal to' + cube(5),
//	].join('\n\n');
	// Add the image to our existing div
	
	var myimg = new Image();
	myimg.src = MyImage;
	element.appendChild(br);
	element.appendChild(myimg);
	
	// Add the image to our existing div
	var i = document.createElement('i');
	i.classList.add('fa', 'fa-user');
	element.appendChild(br);
	element.appendChild(i);
	
	console.log(Data);
	
//	var btn = document.createElement('button');
//	btn.innerHTML = 'btn';
//	btn.onclick = printMe;
//	element.appendChild(br);
//	element.appendChild(btn);

//	懒加载
	var btn2 = document.createElement('button');
	btn2.innerHTML = 'btn2';
	
	btn2.onclick = e => import('./print').then(module => {
		var print = module.default;
		print();
	});
	
	element.appendChild(br);
	element.appendChild(btn2);
	
	
	//	懒加载
	var btn3 = document.createElement('button');
	btn3.innerHTML = 'btn3';
	
	btn3.onclick = Text.bind(null, 'Hello webpack!');
	
	element.appendChild(br);
	element.appendChild(btn3);
	
	return element;
}

//document.body.appendChild(component());
let element = component();
document.body.appendChild(element);


if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log(`Accepting the updated printMe module!:`,);
		//		printMe();
		document.body.removeChild(element);
		element = component();
		document.body.appendChild(element);
	});
}