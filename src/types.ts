export type PageType = {
    path: string,
    title: string
}

export type PageIndexElementType = {
    title: string
}

export type PagesJsonType = PageType[]

export type PageIndexType = {
    pagesJson: PagesJsonType,
}

// export type TopPageType = {
//     pagesJson: PagesJsonType,
// }

export type CardType = {
    titleText: string,
    subText: string,
    from: Date,
    to: Date,
    detailText: string,
}

export type ProjectCardType = {
    titleText: string,
    from: Date,
    to: Date,
    detailText: string,
}

export type SkillCardType = {
    titleText: string,
    skills: {
        skillText: string,
        subText: string,
    }[],
}

type codingSkillsJsonType = {
    skillText: string,
    subText: string,
    skillLogoUrl: string,
}[]

export type CodingSkillCardType = {
    codingSkillsJson: codingSkillsJsonType
}

export type SkillPageType = {
    pagesJson: PagesJsonType, 
    codingSkillsJson: codingSkillsJsonType
}

export type QualificationCardType = {
    titleText: string,
    time: Date,
}

export type PersonalCardType = {
    titleText: string,
    detailText: string,
}

export type ContactCardType = {
    logoUrl: string,
    serviceName: string,
    address: string,
}
