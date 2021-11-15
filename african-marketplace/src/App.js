import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
	return (
		<div className='App'>
			<div id='page-wrapper'>
				<Header />
				<Nav />
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export default App;
