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

export type PersonalCardType = {
    titleText: string,
    detailText: string,
}