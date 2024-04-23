import { useTranslation } from 'react-i18next';

const CardTime = ({ time }: { time: Date }) => {
    const { t, i18n } = useTranslation();
    const locale = i18n.language;
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
    
    return (
        <div className="card-time">
            {time.toLocaleDateString(locale, options)}
        </div>
    )
}

export default CardTime;
