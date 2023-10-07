import CardTitle from "./CardTitle";
import CardTime from "./CardTime"
import { QualificationCardType } from "../../types";

const QualificationCard = ({ titleText, time }: QualificationCardType) => {
    return (
        <div className="card">
            <CardTitle text={titleText} />
            <CardTime time={time} />
        </div>
    )
};

export default QualificationCard;
