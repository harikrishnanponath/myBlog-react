
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs , isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
       <div className="home">
            {error && <div>{ error }</div> }
            {isPending && <div>loading...</div>}
            {blogs && <Bloglist blogs={blogs} />}
       </div> 
    );
}
 
export default Home;