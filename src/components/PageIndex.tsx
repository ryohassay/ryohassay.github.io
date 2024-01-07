import PageIndexElement from "./PageIndexElement";
import { PageIndexType } from "../types";

const PageIndex = ({ pagesJson }: PageIndexType) => {
    return (
        <nav className="page-index-container">
            {pagesJson.map((page, i) => 
                <PageIndexElement key={i} path={page.path} title={page.title}/> 
            )}  
        </nav>
    )
};

export default PageIndex;
