import React from 'react'
import styled from 'styled-components'

const DataWrapper = styled.div`
  height: 100%;
  width: 100%;

  .img-grid {
    height: 80%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
  }

  img {
    max-height: 50px;
    margin: 1.75rem;
  }
`

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
      <div className="img-grid">
        {dataProviders.map(dp => (
          <img key={dp} src={require(`file-loader!../assets/${dp}`)} />
        ))}
      </div>
    </DataWrapper>
  )
}

export default DataSources
