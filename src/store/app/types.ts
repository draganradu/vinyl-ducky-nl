export interface isStateApp {
    dev: boolean,
    maintenance: boolean,
    loading: boolean,
    error: boolean,
}

export interface appType {
    localDBFirst: boolean,
    is: isStateApp
    socialMedia: { [key: string]: string }
    companyInfo: { [key: string]: string }
    internationalization?: { [key in "en" | "nl"]: { [key: string]: string } }
}
