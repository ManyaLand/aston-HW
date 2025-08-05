import { Header } from "../../wdgets/layoutHeader/Header";
import { Footer } from "../../wdgets/layoutFooter/Footer";
import styles from "./MainLayout.module.css";
import { PostList } from "../../wdgets/postList/PostList";

export const MainLayout = () => {
	return (
		<div className={styles.mainWrapper}>
			<Header />
			<main className={styles.main}>
				<PostList />
			</main>
			<Footer />
		</div>
	);
};
