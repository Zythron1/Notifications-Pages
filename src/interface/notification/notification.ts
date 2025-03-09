export interface PropsNotification {
    profilePhoto: string,
    name: string,
    reaction: string,
    reminder?: string,
    isRead: boolean,
    fecha: string,
    message?: string,
    photo?: string,
    unreadNotificationStyles: string
    onclick: () => void
}

export interface Notification {
    readonly id: number;
    profilePhoto: string;
    name: string;
    reaction: string;
    reminder?: string;
    isRead: boolean;
    readonly fecha: string;
    message?: string;
    photo?: string;
    unreadNotificationStyles: string
}