import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const PetBanner = ({ petBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{petBanner.smallText}</p>
        <h3>{petBanner.midText}</h3>
        <h1>{petBanner.largeText1}</h1>
        <img src={urlFor(petBanner.image)} alt="Pet" className="hero-banner-image" />

        <div>
          <Link href={`/product/${petBanner.product}`}>
            <button type="button">{petBanner.buttonText}</button>
          </Link>
          <div className="desc">
           
            <p>{petBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetBanner