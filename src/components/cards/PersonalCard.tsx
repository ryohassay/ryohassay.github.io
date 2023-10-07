import CardTitle  from "./CardTitle";
import CardDetail  from "./CardDetail";
import { PersonalCardType } from "../../types";

const Card = ({ titleText, detailText }: PersonalCardType) => {
    return (
        <div className="card">
            <CardTitle text={titleText} />
            <CardDetail text={detailText} />
        </div>
    )
};

export default Card;
