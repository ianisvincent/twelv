export enum AlertType {
    Success = 'success',
    Error = 'error',
    Info = 'info'
}

export type Alert = {
    type: AlertType;
    message: string;
    isCountDown?: boolean;
}
