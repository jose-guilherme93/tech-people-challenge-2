import React from 'react'

import styles from './style.module.css'

import {TailSpin} from 'react-loader-spinner'

export default function Loading() {
    return (
     <div className={styles.spinner}>
           <TailSpin
           className={styles.tailspin}
            height="80"
            width="80"
            color="#717CFF"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
            />
            carregando...
     </div>
    )
}