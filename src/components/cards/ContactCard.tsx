import CardTitle from "./CardTitle";
import CardTime from "./CardTimeFromTo"
import CardDetail  from "./CardDetail";
import { ContactCardType } from "../../types";

const ContactCard = ({ logoUrl, serviceName, address }: ContactCardType) => {
    return (
        <tr className="contact-card">
            <td className="td-logo"><img src={logoUrl} height="32"/></td>
            <td><a target="_blank" href={address}>{serviceName}</a></td>
        </tr>
    )
};

export default ContactCard;
