import Header from "../components/Header";
//styling for this page on layout.css(imported through Header component)

export default function index(){
    return(
        <>
        <Header/>
        <div className="col-md-12 index_background p-0">
            <div className="col-md-7 catalog_background mt-5  mb-5 pl-0">
                <div className="row mb-2 float-right">
                <div className="innerCatalog"/>                 

                </div>

                <div className="row catalogdata_row">
                <div className="catalogdata pl-5">
                        <p className="catalogTitle_txt pt-4">Product Catalog</p>
                        <p className="catalogYear_txt">2020</p>
                        <p className="catalogauthor_txt">Chester Mawuli</p>
                        <p className="catalog_txt">A modern and clean<br/> Product Catalog to<br/> present your<br/> Company's product</p>
                </div>
                </div>
               
                {/* use these to  design the boxes on the page
                    - hhtml Canvas
                    - particle js
                    - threejs.org
                */}
                
            </div>
        </div>
        </>
        
    )
}