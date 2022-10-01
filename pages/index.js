import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './shop'
import Link from 'next/link'
import ProductDay from '../components/ProductDay'
import ListaCategorie from '../components/ListaCategorie'
import SearchInput from '../components/SearchInput'
import ProductsList from '../components/ProductsList'
import TopBar from '../components/TopBar'

export default function Home() {
  return (
    <div className='grid grid-cols-1 gap-8'>
      {/* <TopBar /> */}
      <ProductDay />
      {/* <ListaCategorie />
      <ProductsList /> */}
    </div>
  )
}
