import CardTitle  from "./CardTitle";
import CardDetail  from "./CardDetail";
import { PersonalCardType } from "../../types";

const PersonalCard = ({ titleText, detailText }: PersonalCardType) => {
    return (
        <div className="card">
            <CardTitle text={titleText} />
            <CardDetail text={detailText} />
        </div>
    )
};

export default PersonalCard;
