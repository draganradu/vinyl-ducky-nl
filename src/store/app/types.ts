export interface isStateApp {
    dev: boolean,
    maintenance: boolean,
    loading: boolean,
    error: boolean,
}

export interface appType {
    is: isStateApp
}