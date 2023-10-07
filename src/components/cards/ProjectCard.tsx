import CardTitle from "./CardTitle";
import CardTime from "./CardTimeFromTo"
import CardDetail  from "./CardDetail";
import { ProjectCardType } from "../../types";

const ProjectCard = ({ titleText, from, to, detailText }: ProjectCardType) => {
    return (
        <div className="card">
            <CardTitle text={titleText} />
            <CardTime from={from} to={to} />
            <CardDetail text={detailText} />
        </div>
    )
};

export default ProjectCard;
