import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/characters/characters.module.scss';

const Characters = () => {

    const [charactersList, setCharacterList] = useState([]);

    useEffect(() => {
        window
        .fetch('/api/characters/all')
        .then((response) => response.json())
        .then(( { results } ) => {
            console.log(results);
            setCharacterList(results);
        })
    }, []);

    return (
        <>
            <Head>
                <title>Characters</title>
                <meta name="description" content="Home interfaz Nexjs con typeScript" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.containerCharacters}>
                {charactersList.map((character: any) => {
                    return (
                        <div key={character.id} className={styles.cardCharacter}>
                            <p className={styles.nameCharacter}>{character.name}</p>
                            <picture className={styles.pictureCharacter}>
                                <Image
                                    src={character.image}
                                    alt='picture charcter'
                                    layout={'fill'}
                                />
                            </picture>
                            <article className={styles.infoCharacter}>
                                <p>Is a {character.species}, currently {character.status}</p>
                                <p>{character.type}</p>
                            </article>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default Characters;