"use client";
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "./gallery-card.scss";

interface GalleryCardProps {
  title: string,
  cardImages: {
    src: string,
    title?: string,
    description?: string
  }[]
}

const GalleryCard: React.FC<GalleryCardProps> = (props) => {
  const {title, cardImages} = props;
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  cardImages.map((cardImage) => {
    if (!cardImage.title) {
      cardImage.title = title;
    }
  })

  return (
    <>
      <Card className="gallery-card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {cardImages
              .slice(0, 6)
              .map((slide, index) => (
              <div key={index} onClick={() => setCurrentIndex(index)}>
                <Image src={slide.src} width={100} height={100} style={{ objectFit: 'cover' }} alt={title} />
              </div>
            ))}
          </Masonry>
        </Card.Body>
        <Lightbox
          open={currentIndex > -1}
          close={() => setCurrentIndex(-1)}
          index={currentIndex}
          slides={cardImages}
          plugins={[ Captions, Counter, Fullscreen, Zoom ]}
          captions={{
            showToggle: true
          }}
          counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        />
      </Card>
    </>
  )
}

export default GalleryCard;