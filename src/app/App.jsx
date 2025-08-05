import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../wdgets/postList/PostList";

export const App = () => {
	return (
		<MainLayout>
			<PostList />
		</MainLayout>
	);
};
