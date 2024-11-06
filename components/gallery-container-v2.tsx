"use client";
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import { Gallery } from "react-grid-gallery";
import renaultClio1 from "/public/images/renault-clio4/renault-clio1.jpg";
import renaultClio2 from "/public/images/renault-clio4/renault-clio2.jpg";
import renaultClio3 from "/public/images/renault-clio4/renault-clio3.jpg";
import kiaRio2 from "/public/images/kia-rio/kia-rio2.jpg";
import toyotaYaris1 from "@/public/images/toyota-yaris/toyota-yaris1.jpg";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "./gallery-container-v2.scss";

const GalleryContainerV2 = () => {
  const t = useTranslations('components.GalleryContainer');
  const [index, setIndex] = useState(-1);

  const staticImages = [
    {
      src: renaultClio1,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: renaultClio2,
      tags: [
        { value: "Renault", title: "renault" },
      ],
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: renaultClio3,
    },
    {
      src: kiaRio2,
      tags: [
        { value: "Kia", title: "kia" },
     ],
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: toyotaYaris1,
      tags: [
        { value: "Toyota", title: "toyota" },
     ],
      caption: "Toyota yaris",
    },
  ];

  const galleryImages = staticImages.map((staticImage) => {
    return {
      src: staticImage.src.src,
      width: staticImage.src.width,
      height: staticImage.src.height,
      caption: staticImage.caption,
      tags: staticImage.tags,
      title: staticImage.caption
    }
  });

  const handleClick = (index: number) => setIndex(index);


  return (
    <>
      <section id="gallery-container-v2" className="gallery-container-v2">
        <Container fluid="md" className="py-5">
          <Row className="mb-3">
            <Col>
              <h1>{t('title')}</h1>
              <h5>{t('subTitle')}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Gallery
                images={galleryImages}
                onClick={handleClick}
                enableImageSelection={false}
                margin={4}
                tileViewportStyle={() => ({
                  borderRadius: ".25rem",
                  overflow: "hidden",
                  backgroundColor: "transparent"
                })}
              />
              <Lightbox
                open={index > -1}
                close={() => setIndex(-1)}
                index={index}
                slides={galleryImages}
                plugins={[ Captions, Counter, Fullscreen, Zoom ]}
                captions={{
                  showToggle: true
                }}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default GalleryContainerV2;