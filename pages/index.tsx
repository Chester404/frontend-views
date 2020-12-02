import Header from "../components/Header";
//styling for this page on layout.css(imported through Header component)

export default function index(){
    return(
        <>
        <Header/>
        <div className="index_background">This repo has design view of various test pages in Next.js
            <div className="catalog_background">
                <div className="innerCatalog">

                </div>
            </div>
        </div>
        </>
        
    )
}