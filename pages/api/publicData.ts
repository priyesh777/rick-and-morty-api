// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export async function FetchApiData() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        if (!response.ok) {
            console.log("error in fetching data::>>");
            throw new Error('Failed to fetch data !')
        }
        const data = await response.json()
        console.log("The received data::>>", data);
    } catch (error) {
        console.log("Some failure in the data fetch::>>", error);
        throw new Error("Failed the data fetch process !!");
    }
}

export async function FetchCharacterDetail(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${req}`);
        if (!response.ok) {
            console.log("error in fetching data::>>");
            throw new Error('Failed to fetch data !')
        }
        const data = await response.json()
        console.log("The received data::>>", data);
        res.status(200).json({ name: data.name })
    } catch (error) {
        console.log("Some failure in the data fetch::>>", error);
        throw new Error("Failed the data fetch process !!");
    }
}
