import { Subtitle, PrimaryBotton, NotificationCard } from '../index' // componentes 
import { useNotification } from '../../hooks/index';

export const Main = () => {
    const { notifications, markAsRead, markAllAsRead } = useNotification();

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


