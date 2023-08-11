import type { NextPage } from 'next'
import React, { useState } from "react"
import { useRouter } from "next/router";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchInput from '../components/SearchInput'
import { connect } from "react-redux";
import { OWNER_PUBLIC_KEY } from '../lib/store/types';
import { useDispatch } from "react-redux";

const Home: NextPage = () => {
  const [ownerKey, setOwnerKey] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const goView = () => {
    if (ownerKey === "") {
      alert("Please input owner public key");
      return;
    }
    dispatch({
      type: OWNER_PUBLIC_KEY,
      payload: ownerKey
    })
    router.push("/view");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <span className='text-6xl mb-16 font-bold'> NFT Viewer </span>
        <SearchInput className='flex flex-row w-1/2 items-center justify-center' text={ownerKey} onChangeHandler={setOwnerKey} onClickHandler={goView}></SearchInput>
      </main>
    </div>
  )
}

export default Home