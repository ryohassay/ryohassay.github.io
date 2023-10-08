import { ContactCardType } from "../../types";

const ContactCard = ({ logoUrl, serviceName, address }: ContactCardType) => {
    return (
        <tr className="contact-card">
            <td className="td-logo"><img src={logoUrl} height="32" alt="" /></td>
            <td><a target="_blank" rel="noreferrer" href={address}>{serviceName}</a></td>
        </tr>
    )
};

export default ContactCard;
