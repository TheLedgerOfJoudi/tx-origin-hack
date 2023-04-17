import styles from '../styles/Home.module.css'
import { ethers } from 'ethers'
import { useState } from 'react'
import { ADDRESS, ABI } from '../config/config'
export default function Home() {
  const [hacked, setHacked] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(
      ADDRESS,
      ABI,
      signer
    )
    await contract.hack()
    setHacked(true)
    console.log("hacked!")
  }
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <button type="submit"> Click! </button>
        {hacked && <p>hacked!</p>}
      </form>
    </div>
  )
}
