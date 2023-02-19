import { useState } from 'react'
import Header from './components/Header'
import LeaderboardTable from './components/LeaderboardTable'
import Footer from './components/Footer' 
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <LeaderboardTable/>
      <Footer />
    </div>
  )
}

export default App
