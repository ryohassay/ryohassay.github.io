// Not sure whether I should make this a component or a CSS class
import { Link } from "react-router-dom";
import { PageType } from "../types";

const PageIndexElement = ({ path, title }: PageType) => {
    return (
        <div className="page-index-element">
            <Link className="page-index-link" to={path}>{title}</Link>
        </div>
    )
};

export default PageIndexElement;
