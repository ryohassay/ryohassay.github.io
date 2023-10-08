import CardTitle from "./CardTitle";
import { CodingSkillCardType } from "../../types";

const CodingSkillCard = ({ codingSkillsJson }: CodingSkillCardType) => {
    return (
        <div className="card">
            <CardTitle text="Coding" />
            <div className="coding-skill-list">
                {codingSkillsJson.map((skill, index) => 
                    <div className="coding-skill-list-item" key={index}>
                        <img src={skill.skillLogoUrl} height="80px"/>
                        <div>{skill.skillText}</div>
                        {skill.subText && <> ({skill.subText})</>}
                    </div> 
                )}
            </div>
        </div>
    )
};

export default CodingSkillCard;
