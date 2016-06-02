import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';

var dataJSON = [
	{id: 1, name: 'Batman'},
	{id: 2, name: 'Pulp Fiction'},
	{id: 3, name: 'Donnie Darko'}
];

ReactDOM.render(
	<Container movies={dataJSON}/>, 
	document.getElementById('main'));
