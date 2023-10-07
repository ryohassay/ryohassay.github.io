import CardTitle from "./CardTitle";
import { SkillCardType } from "../../types";

const SkillCard = ({ titleText, skills }: SkillCardType) => {
    return (
        <div className="skill-card">
            <CardTitle text={titleText} />
            <ul>
                {skills.map((skill, index) => 
                    <li key={index}>
                        <>{skill.skillText}</>
                        {skill.subText && <> ({skill.subText})</>}
                    </li> 
                )}
            </ul>
        </div>
    )
};

export default SkillCard;
