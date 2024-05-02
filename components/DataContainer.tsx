import React from 'react'
import { Card } from './Card'

interface Props {
    days: number | string,
    hours: number | string,
    minutes: number | string,
    seconds: number | string,
}

export const DataContainer = ({ days, hours, minutes, seconds }: Props) => {


    return (
        <div className=" mt-2 md:mt-20  rounded-xl">
            <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
                <Card data={""} />
            </div>

        </div>
    )
}
