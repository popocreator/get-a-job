import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<h1>안녕!</h1>
			</main>
			<Footer />
		</>
	);
}
