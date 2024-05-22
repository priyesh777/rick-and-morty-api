import React from 'react'

interface inputProps {
    value: string | undefined,
    handleClick(): void,
    handleChange(e: any): void,
}

export const SearchInput = ({ value, handleClick, handleChange }: inputProps) => {

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <div className="z-6 mx-auto space-y-4 flex flex-col md:flex-row justify-center items-center md:space-y-0">
            <input
                className="text-xl md:text-xl font-redhat outline-none px-2 py-1 w-80 rounded-lg mr-4 "
                name="searchData"
                type="search"
                placeholder="Search ..."
                onKeyPress={handleKeyPress}
                value={value}
                onChange={handleChange}
            />

            <button
                onClick={handleClick}
                className="bg-rose-300 text-xl font-semibold font-redhat px-4 py-2 md:text-xl rounded-xl text-rose-500 hover:bg-rose-500 hover:text-rose-100 transition duration-300 ease-in">
                Search Data
            </button>
        </div>
    )
}
