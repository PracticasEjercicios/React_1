import React from 'react';
import '../css/techo.css';
import FilaFoco from './FilaFoco';

const Techo = (props) =>
(
	<div className="techo">
		<FilaFoco />
		<br />
		<FilaFoco />
	</div>
);

export default Techo;