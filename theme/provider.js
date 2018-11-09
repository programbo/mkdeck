import React from 'react'
import { Head } from 'mdx-deck'
import { alias } from '../now.json'
import { title, name, version, description } from '../package.json'

export const Provider = ({ children }) => {
  return (
    <div>
      <Head>
        <meta property="og:url" content={`https://${alias}`} />
        <meta property="og:image" content={`https://${alias}/card.png`} />
        <meta property="og:title" content={`${title || name} (v${version})`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>
      <link rel="stylesheet" href="../assets/fonts/euclid.css" />
      {children}
    </div>
  )
}
