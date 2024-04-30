import CardTitle from "./CardTitle";
import { CodingSkillCardType } from "../../types";

import { useTranslation } from "react-i18next";

const CodingSkillCard = ({ codingSkillsJson }: CodingSkillCardType) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="card">
            <CardTitle text={t("skillPage.codingCard.title")} />
            <div className="coding-skill-list">
                {codingSkillsJson.map((skill, index) => 
                    <div className="coding-skill-list-item" key={index}>
                        <img src={skill.skillLogoUrl} height="80px" alt="" />
                        <div>{skill.skillText}</div>
                        {skill.subText && <> ({skill.subText})</>}
                    </div> 
                )}
            </div>
        </div>
    )
};

export default CodingSkillCard;
