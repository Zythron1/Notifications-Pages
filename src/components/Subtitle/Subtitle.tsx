import { useState, useEffect } from "react"

type NumberOfActiveNotifications = {
    numberOfNotifications: number
}

export const Subtitle = ({ numberOfNotifications }: NumberOfActiveNotifications) => {
    const [notifications, setNotifications] = useState(numberOfNotifications);

    useEffect(() => {
        setNotifications(numberOfNotifications)

    }, [numberOfNotifications])

    return (
        <h2 className="text-[#1c202b] font-bold text-xl">Notifications <span className='bg-[#0a317b] text-white inline-block w-7 h-7 text-center rounded-lg '>{ notifications }</span></h2>
    )
}