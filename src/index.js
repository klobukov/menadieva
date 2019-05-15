import React, { Fragment } from 'react'
import {render} from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Header from './header';
import Gallery from './Gallery';
import Footer from './footer';


function App(){		
	return(
		<Fragment>
			<Header/>
			<Gallery />
			<Footer />
		</Fragment>
	)
}
	




// ========================================

render(
  <App />,
  document.getElementById('root')
);

