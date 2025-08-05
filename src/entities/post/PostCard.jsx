import styles from "./PostCard.module.css";

export const PostCard = ({ title, content }) => {
	return (
		<article className={styles.card}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.content}>{content}</p>
		</article>
	);
};
