import { useTranslation } from "react-i18next";

const Title = () => {
    const { t } = useTranslation();
    return (
        <h1 className="title">
            {t("name")}
        </h1>
    )
}

export default Title;
