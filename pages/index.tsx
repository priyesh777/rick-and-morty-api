import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SearchInput } from '../components/SearchInput'
import DataCollection from '../components/DataCollection'
import { FetchApiData } from './api/publicData';
import styles from './styles.module.scss'

const Home: NextPage = () => {

    const [newSearch, setNewSearch] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        FetchApiData();
    }, [])


    const handleClick = () => {
        console.log("Search the data in the list>>>>>");
    };

    const handleChange = () => {
        console.log('INPUT ADDED!!');

    };

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
            <Head>
                <title>Rick and Morty</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <Header message={message} />
            <SearchInput value={newSearch} handleClick={handleClick} handleChange={handleChange} />
            <DataCollection />
            <Footer />
        </div>
    )
}

export default Home
