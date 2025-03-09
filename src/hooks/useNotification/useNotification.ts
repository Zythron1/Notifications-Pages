import { useState } from 'react'
import { Notification } from '../../interface/index';
import { avatarImage } from '../../assets/images/index'

export const useNotification = () => {
    const [notifications, setNotifications] = useState<Notification[]>([
            { id: 1, profilePhoto: avatarImage.avatarMarkWebber, name: 'Mark Webber', reaction: 'reacted to your recent post', reminder: 'My first tournament today', isRead: false, fecha: '1m ago', message: '', photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
            { id: 2, profilePhoto: avatarImage.avatarAngelaGray, name: 'Angela Gray', reaction: 'followed you', reminder: '', isRead: false, fecha: '5m ago', message: '', photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
            { id: 3, profilePhoto: avatarImage.avatarJacobThompson, name: 'Jacob Thompson', reaction: 'has joined your group', reminder: 'Chess Club', isRead: false, fecha: '1 day ago', message: '', photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
            { id: 4, profilePhoto: avatarImage.avatarRizkyHasanuddin, name: 'Rizky Hasanuddin', reaction: 'sent you a private message', reminder: '', isRead: false, fecha: '5 days ago', message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.", photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
            { id: 5, profilePhoto: avatarImage.avatarKimberlySmith, name: 'Kimberly Smith', reaction: 'commented on your picture', reminder: '', isRead: true, fecha: '1 week ago', message: '', photo: avatarImage.imageChess, unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
            { id: 6, profilePhoto: avatarImage.avatarNathanPeterson, name: 'Nathan Peterson', reaction: 'reacted to your recent post', reminder: '5 end-game strategies to increase your win rate', isRead: true, fecha: '2 weeks ago', message: '', photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
            { id: 7, profilePhoto: avatarImage.avatarAnnaKim, name: 'Anna Kim', reaction: 'left the group', reminder: 'Chess Club', isRead: true, fecha: '2 weeks ago', message: '', photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' }
        ]);
        
    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n => n.id === id ? {...n, isRead: true} : n))
    }
        
    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    }
    
    return { notifications, markAsRead, markAllAsRead }
}
