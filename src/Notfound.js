import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {
    return (  
        <div className="not-found-page">
            <h2>Sorry</h2>
            <p>The page cannot be found...</p>
            <Link to="/">Back to homePage</Link>
        </div>
    );
}
 
export default Notfound;