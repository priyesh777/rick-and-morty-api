import React from 'react';
import { CharacterInfo } from './DataCollection';

interface Props {
    data: CharacterInfo | undefined,
    description?: string,
};

export const Card = (props: Props) => {

    const {
        data,
        description,
    } = props;

    return (
        <div className="max-w-sm max-h-[500px] border-2 border-rose-500 rounded-md p-1 m-5 w-[calc(33.333% - 16px)] mb-4">
            <a href="#">
                <img className="w-full max-h-[300px]" src={`${data?.image}`} alt="character-image" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.name.slice(0, 21)}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.species} - {data?.status} - {data?.id}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
