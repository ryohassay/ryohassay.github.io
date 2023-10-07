import CardTitle  from "./cards/CardTitle";
import CardSub  from "./cards/CardSub";
import CardTime  from "./cards/CardYear";
import CardDetail  from "./cards/CardDetail";
import { CardType } from "../types";

const Card = ({ titleText, subText, from, to, detailText }: CardType) => {
    return (
        <div className="card">
            <CardTitle text={titleText} />
            <CardSub text={subText} />
            <CardTime from={from} to={to} />
            <CardDetail text={detailText} />
        </div>
    )
};

export default Card;
