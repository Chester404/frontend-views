import Header from "../components/Header";
//styling for this page on layout.css(imported through Header component)

export default function index(){
    return(
        <>
        <Header/>
        <div className="row index_background">This repo has design view of various test pages in Next.js
            <div className="catalog_background">
                <div className="innerCatalog">    
                </div>
                <div className="catalogdata">
                        <p className="catalogTitle_txt">Product Catalog</p>
                        <p className="catalogYear_txt">2020</p>
                        <p className="catalogauthor_txt">by Kofi</p>
                        <p className="catalog_txt">A modern and clean<br/> Product Catalog to<br/> present your<br/> Company's product</p>
                </div>
            </div>
        </div>
        </>
        
    )
}