import Navbar from "../../Components/Navbar/Navbar";
import SEO from "../../Data/seo";
import { Helmet } from 'react-helmet'
import INFO from "../../Data/user";

const Home = () => {

    const currentSeo = SEO.find((item)=>item.page==="home")

    return ( 
        <>
        <Helmet>
            <title>{INFO.main.title}</title>
            <meta name="description" content={currentSeo.description} />
            <meta name="keywords" content={currentSeo.keywords.join(", ")} />
        </Helmet>
        <div className="page-content">
            <Navbar active="home"/>
            
        </div>
        </>
        
     );
}
 
export default Home;
<div className="home">
    <h2>Home Preview</h2>
</div>