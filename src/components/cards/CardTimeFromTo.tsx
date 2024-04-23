import { useTranslation } from 'react-i18next';

const CardTimeFromTo = ({ from, to }: { from: Date, to: Date}) => {
    const { t, i18n } = useTranslation();
    const locale = i18n.language;
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
    const today = new Date();
    const isToday = (to.getFullYear() == today.getFullYear() && to.getMonth() == today.getMonth() && to.getDate() == today.getDate());
    
    return (
        <div className="card-time">
            {from.toLocaleDateString(locale, options)} &ndash; {isToday ? t("now") : to.toLocaleDateString(locale, options)}
        </div>
    )
}

export default CardTimeFromTo;
