import React from 'react'

interface Props {
    message: string | undefined,
};

export const Header = ({ message }: Props) => {
    return (
        <header className="mx-auto mt-2 mb-2">
            <h1 className="text-2xl mt-8 md:text-4xl font-bold font-redhat text-rose-500 font- text-center mx-auto ">
                {message ? message : "LIST OF DATA FROM THE API"}
            </h1>
        </header>
    )
}
