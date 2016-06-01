import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';

ReactDOM.render(
	<Container movies={['Batman','Pulp Fiction','Donnie Darko']}/>, 
	document.getElementById('main'));
