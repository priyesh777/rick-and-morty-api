import React from "react";

interface CharacterInfo {
    id: number;
    name: string;
    location: {
        name: string;
    }
    origin: {
        name: string;
    }
    species: string;
    status: string;
}

interface Props {
    apiData: CharacterInfo[] | undefined;
}

function DataCollection(props: Props) {

    const { apiData } = props;

    return (
        <div className="flex flex-wrap items-center mt-4 mx-auto px-4 bg-[#343650]">
            {apiData ? (
                <>
                    {apiData.map((item) => {
                        <div className="flex flex-wrap items-center mx-auto px-4">
                            {item.name}
                        </div>
                    })}
                </>
            ) : (
                <div className="flex flex-wrap items-center mx-auto px-4">
                    SORRY COULD NOT FETCH DATA RIGHT NOW !
                </div>
            )
            }
        </div>
    )
}
export default DataCollection;