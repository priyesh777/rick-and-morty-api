import React from "react";
import { Card } from "./Card";

export interface CharacterInfo {
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
    created: string;
    url: string;
    image: string;
}

export interface ApiDataProps {
    apiData: CharacterInfo[] | undefined;
}

function DataCollection(props: ApiDataProps) {

    const { apiData } = props;
    console.log("The following API DATA PROPS::>>", apiData);

    return (
        <div className="flex flex-wrap justify-between items-start mt-4 mx-auto p-2 bg-[#343650] w-full">
            {apiData ? (
                <>
                    {apiData.map((item) => (
                        //<div className="flex flex-wrap items-center text-red-400">
                        //    {item.name}
                        //</div>
                        <Card
                            data={item}
                            description={item.origin.name ?? ""}
                        />
                    ))}
                </>
            ) : (
                <div className="flex flex-wrap items-center mx-auto px-4">
                    <h1>
                        NO DATA AVAILABLE !
                    </h1>
                </div>
            )
            }
        </div>
    )
}
export default DataCollection;