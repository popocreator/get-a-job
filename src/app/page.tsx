import Image from 'next/image';
import styles from './page.module.css';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
	return (
		<div>
			<Header />
			<main>
				<h1>안녕!</h1>
			</main>
			<Footer />
		</div>
	);
}
