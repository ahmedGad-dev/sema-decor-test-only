import React from 'react'
import './_gallery.scss'
import gallery1 from '../../assets/gallery/gallery-1.jpeg'
import gallery2 from '../../assets/gallery/gallery-2.jpeg'
import gallery3 from '../../assets/gallery/gallery-3.jpeg'
import gallery4 from '../../assets/gallery/gallery-4.jpeg'
import gallery5 from '../../assets/gallery/gallery-5.jpeg'
import gallery6 from '../../assets/gallery/gallery-6.jpeg'
import gallery7 from '../../assets/gallery/gallery-7.jpeg'
import gallery8 from '../../assets/gallery/gallery-8.jpeg'
import gallery9 from '../../assets/gallery/gallery-9.jpeg'
import gallery10 from '../../assets/gallery/gallery-10.jpeg'
import gallery11 from '../../assets/gallery/gallery-11.jpeg'
import gallery12 from '../../assets/gallery/gallery-12.jpeg'
import gallery13 from '../../assets/gallery/gallery-13.jpeg'
import gallery14 from '../../assets/gallery/gallery-14.jpeg'


const Gallery = () => {
  return (
      <section className="gallery">
            <figure className="gallery__item gallery__item--1"><img src={gallery11} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--2"><img src={gallery2} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--3"><img src={gallery3} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--4"><img src={gallery4} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--5"><img src={gallery5} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--6"><img src={gallery12} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--7"><img src={gallery7} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--8"><img src={gallery8} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--9"><img src={gallery9} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--10"><img src={gallery10} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--11"><img src={gallery13} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--12"><img src={gallery6} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--13"><img src={gallery1} alt="Gallery" className="gallery__img"/></figure>
            <figure className="gallery__item gallery__item--14"><img src={gallery14} alt="Gallery" className="gallery__img"/></figure>
        </section>
  )
}

export default Gallery