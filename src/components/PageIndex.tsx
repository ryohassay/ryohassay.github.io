import PageIndexElement from "./PageIndexElement";
import { PageIndexType } from "../types";

const PageIndex = ({ pagesJson }: PageIndexType) => {
    return (
        <nav className="page-index-container">
            {pagesJson.map((page) => 
                <PageIndexElement path={page.path} title={page.title}/> 
            )}  
        </nav>
    )
};

export default PageIndex;
