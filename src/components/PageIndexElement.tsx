// Not sure whether I should make this a component or a CSS class
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PageType } from "../types";

const PageIndexElement = ({ path, title }: PageType) => {
    const { i18n } = useTranslation();
    const fullPath = "/" + i18n.language + path;

    return (
        <div className="page-index-element">
            <Link className="page-index-link" to={fullPath}>{title}</Link>
        </div>
    )
};

export default PageIndexElement;
