import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import PdfViewer from '../src/PdfViewer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          To spot the issue:
        </p>

        <ul>
          <li>
            Open the dev tools
          </li>
          <li>
            Refresh the page
          </li>
          <li>
            In the Network tab, spot the access to the worker.
            For example <code>/_next/static/worker/ff2b3b2479e7a9fbaea2244ed1875dfa.js</code>
          </li>
          <li>
            Open this URL in a new tab
          </li>
          <li>
            Insert <code>/fr</code> at the beginning of the path.
            For example, <code>/fr/_next/static/worker/ff2b3b2479e7a9fbaea2244ed1875dfa.js</code>
          </li>
        </ul>

        <p>
          Does this new, locale-prefixed URL works?
        </p>

        <ul>
          <li>With <code>npm run build / npm run start</code>, it does</li>
          <li>On Netlify, it doesn&apos;t</li>
        </ul>

        <PdfViewer />
      </main>
    </div>
  )
}
