'use client';
import {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Ceil from '@/components/ceil'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  /// paleta 1: 606c38, 283618, fefae0, dda15e, bc6c25
  /// paleta 2: 2b2d42, 8d99ae, edf2f4, ef233c, d90429

  const vilaNova = ["06h40", "08h05", "09h45", "11h40", "13h10", "14h25", "16h20", "18h15", "19h50", "21h30"]
  const ufob = ["07h20", "08h45", "10h55", "12h40", "13h40", "15h35", "17h20", "19h10", "20h50", "22h30"]

  const [ativo, setAtivo] = useState(vilaNova)

  const renderizarCeils = (saida: any) => {
    return saida.map((item: string) => {
      return (
        <Ceil key={item} hour={item} color={`${arraysIguais(saida, vilaNova) ? "#bc6c25" : "#ef233c"}`} />
      )
    })
  }

  
  function arraysIguais(a: any, b: any) {
    return a.length === b.length && a.every((val: any, i: any) => val === b[i]);
  }

  return (
    <>
      <Head>
        <title>Linha 15</title>
        <meta name="description" content="Veja os horários do Linha 15!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.container} style={{backgroundColor: `${arraysIguais(ativo, vilaNova) ? "#fefae0" : "#EDF2F4"}`}}>
          <h1 className={styles.title} style={{color: `${arraysIguais(ativo, vilaNova) ? "#283618" : "#2B2D42"}`}}>Linha 15</h1>
          <p className={styles.subtitle} style={{color: `${arraysIguais(ativo, vilaNova) ? "#606C38" : "#8D99AE"}`}}>Veja os horários da famosa linha 15 mais facilmente e atualizados!</p>
          <div className={styles.buttonLine}>
            <div className={`${arraysIguais(ativo, vilaNova) ? styles.vilaNovaAtivo : styles.vilaNovaOff}`} onClick={() => setAtivo(vilaNova)}>Saída Vila Nova</div>
            <div className={`${arraysIguais(ativo, ufob) ? styles.ufobAtivo : styles.ufobOff}`} onClick={() => setAtivo(ufob)}>Saída UFOB</div>
          </div>
          <div className={styles.divider} style={{backgroundColor: `${arraysIguais(ativo, vilaNova) ? "#283618" : "#2B2D42"}`}} />
          <div className={styles.ceilGrid} >
            {renderizarCeils(ativo)}
          </div>
        </div>
      </main>
    </>
  )
}
