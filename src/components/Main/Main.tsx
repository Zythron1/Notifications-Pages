import { Subtitle, PrimaryBotton, NotificationCard } from '../index'
import { avatarImage } from '../../assets/images/index'
import { useState } from 'react'

interface Notification {
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

export const Main = () => {
    const [notifications, setNotifications] = useState<Notification[]>([
        { id: 1, profilePhoto: avatarImage.avatarMarkWebber, name: 'Mark Webber', reaction: 'reacted to your recent post', reminder: 'My first tournament today', isRead: false, fecha: '1m ago', message: '', photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
        { id: 2, profilePhoto: avatarImage.avatarAngelaGray, name: 'Angela Gray', reaction: 'followed you', reminder: '', isRead: false, fecha: '5m ago', message: '', photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
        { id: 3, profilePhoto: avatarImage.avatarJacobThompson, name: 'Jacob Thompson', reaction: 'has joined your group', reminder: 'Chess Club', isRead: false, fecha: '1 day ago', message: '', photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
        { id: 4, profilePhoto: avatarImage.avatarRizkyHasanuddin, name: 'Rizky Hasanuddin', reaction: 'sent you a private message', reminder: '', isRead: false, fecha: '5 days ago', message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.", photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
        { id: 5, profilePhoto: avatarImage.avatarKimberlySmith, name: 'Kimberly Smith', reaction: 'commented on your picture', reminder: '', isRead: false, fecha: '1 week ago', message: '', photo: avatarImage.imageChess, unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
        { id: 6, profilePhoto: avatarImage.avatarNathanPeterson, name: 'Nathan Peterson', reaction: 'reacted to your recent post', reminder: '5 end-game strategies to increase your win rate', isRead: false, fecha: '2 weeks ago', message: '', photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' },
        { id: 7, profilePhoto: avatarImage.avatarAnnaKim, name: 'Anna Kim', reaction: 'left the group', reminder: 'Chess Club', isRead: false, fecha: '2 weeks ago', message: '', photo: '', unreadNotificationStyles: 'mr-1 bg-red-600 inline-block size-2 rounded-[50%]' }
    ]);

    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n => n.id === id ? {...n, isRead: true} : n))
    }

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    }


    return (
        <main className=' py-6 px-4 mx-auto my-6 rounded-lg max-w-[650px] min-w-[320px] bg-white' >
            <section className='flex flex-col gap-5 rounded-md my-5 px-5 ]'> 
                
                <div className='flex justify-between w-full'>
                    <Subtitle numberOfNotifications={notifications.filter(n => !n.isRead).length} />
                    <PrimaryBotton content='Mark all as read' onclick={() => markAllAsRead() } />
                </div>

                <div className='flex flex-col  gap-3 '>
                    {notifications.map(n => 
                            
                            <NotificationCard
                                profilePhoto= { n.profilePhoto }
                                name= { n.name }
                                reaction= { n.reaction }
                                reminder= { n.reminder }
                                isRead= {n.isRead }
                                fecha= { n.fecha }
                                message= { n.message }
                                photo={n.photo}
                                unreadNotificationStyles={n.isRead ? '' : n.unreadNotificationStyles}
                                onclick= { () => markAsRead(n.id) }/>
                        )}
                </div>

            </section>
        </main>
    )
}


