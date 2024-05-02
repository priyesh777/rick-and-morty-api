import React from 'react'

interface Props {
    data: string | number,
    description?: string,
};

export const Card = (props: Props) => {

    const {
        data,
        description,
    } = props;

    return (
        <div className="flex flex-col items-center mt-4 px-2">
            <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-32 h-32  text-2xl md:text-4xl mt-4 ">
                <div className="rounded-t-lg rounded-b-lg bg-[#343650] w-full h-full"></div>

                <div className="text-5xl absolute text-rose-500 z-10 font-bold font-redhat md:text-7xl font-mono ">
                    {data}
                </div>

                <div className="rounded-b-lg rounded-t-lg bg-[#2c2e3f] w-full h-full"></div>

                {/* Random two small dots */}
                <div className="absolute -right-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]"></div>
                <div className="absolute -left-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]" ></div>

            </div>
            <p className="text-lg mt-3 font-semibold text-rose-200  md:text-2xl ">
                {description}
            </p>
        </div>
    )
}
