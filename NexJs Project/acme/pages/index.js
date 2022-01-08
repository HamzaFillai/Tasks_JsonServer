import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="home">
        <div className="apwd">
          <span>O</span>
          <h1>Affrodable Professional Web Design</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sitamet sem interdum condimentum.</p>
        </div>
        <div className="subscribe">
            <h4>Subscribe To Our Nzesletter</h4>
            <p>
                <input type="text" placeholder="Email"/> <button>Subscribe</button>
            </p>
        </div>
    </div>
  )
}
