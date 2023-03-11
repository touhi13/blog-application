import Sidebar from "../components/sidebar/Sidebar";
import PostGrid from "../components/grid/PostGrid";

export default function Home() {
    return (
        <section className='wrapper'>
            <Sidebar />
            <PostGrid />
        </section>
    )
}
