import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SearchInput } from '../components/SearchInput'
import DataCollection, { CharacterInfo } from '../components/DataCollection'


const Home: NextPage = () => {

    const [newSearch, setNewSearch] = useState<string>("");
    const [message, setMessage] = useState<string>();
    const [apiData, setApiData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const FetchApiData = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            if (!response.ok) {
                console.log("error in fetching data::>>");
                setIsLoaded(true);
                throw new Error('Failed to fetch data !')
            }
            setIsLoaded(true);
            const data = await response.json()
            console.log("The received data::>>", data.results);
            setApiData(data.results);
            setMessage("The latest character of Rick & Morty Series");
        } catch (error) {
            console.log("Some failure in the data fetch::>>", error);
            setMessage("Sorry could not fetch Data at the moment !");
        }
    }

    useEffect(() => {
        FetchApiData();
    }, [])


    const handleClick = () => {
        console.log("Search the data in the list>>>>>");
        if (apiData && apiData.length > 0) {
            const filteredData = apiData?.filter((item: CharacterInfo) => item?.name.toLowerCase().includes(newSearch.toLowerCase()));
            console.log("The FILTERED ITEM::>>", newSearch, filteredData);
            setApiData(filteredData);
        } else {
            setMessage("Sorry could not perform the search!");
        }
    };

    const handleChange = (e) => {
        console.log('INPUT ADDED!!', e.target.value);
        setNewSearch(e.target.value);

    };

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
            <Head>
                <title>Rick and Morty</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <Header message={message} />
            <SearchInput
                value={newSearch}
                handleClick={handleClick}
                handleChange={handleChange}
            />
            <DataCollection apiData={apiData} />
            <Footer />
        </div>
    )
}

export default Home
