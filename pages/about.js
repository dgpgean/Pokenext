import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About(){
    return (
        <div className={styles.about}>
            <h1>sobre o projeto</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus libero dicta ducimus? Reprehenderit odio aspernatur quod minima doloribus eos eveniet in excepturi eum ad consequuntur architecto sapiente, laboriosam animi! </p>
            <Image src="/images/charizard.png" width="300" height="300" alt='Charizard'/>
        </div>
    )
}
