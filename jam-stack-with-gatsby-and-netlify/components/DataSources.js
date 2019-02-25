import React from 'react'
import styled from 'styled-components'

const DataWrapper = styled.div`
  height: 100%;
  width: 100%;

  img {
    position: relative;
    max-height: 35px;
  }
`

const blackList = []
const offset = 1

const randomUpTo = (max, chance) => {
  let value = parseInt(Math.random() * max)

  if (
    !blackList.includes(value) &&
    !blackList.includes(value + offset) &&
    !blackList.includes(value - offset)
  ) {
    if (Math.random() > chance) {
      value = value * -1
    }
  }

  blackList.push(value)

  console.log(value)
  return value
}

const DataSources = () => {
  const dataProviders = [
    'craft-cms.svg',
    'markdown.svg',
    'trello.png',
    'graphcms.svg',
    'contentful.svg',
    'wporg-logo.svg',
    'strapi.png',
    'twitter.svg',
    'datocms.svg',
    'shopify.svg',
    'amazon-s3.png',
    'sanity.svg',
    'instagram.png',
    'google-sheets.png',
    'stripe.png',
    'firebase.png',
    'cloudinary.png',
    'dropbox.png',
    'yaml.svg',
    'json.svg',
    'excel.png'
  ]

  return (
    <DataWrapper>
      <h1>Data Sources</h1>
      {dataProviders.map(dp => (
        <img
          key={dp}
          style={{
            left: `${randomUpTo(500, 0.5)}px`,
            top: `${randomUpTo(250, 0.01)}px`
          }}
          src={require(`file-loader!../assets/${dp}`)}
        />
      ))}
    </DataWrapper>
  )
}

export default DataSources
