import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const App = () => {
  const images = [{ src: `1.jpg`},
                  {src: `2.jpg`},
                  {src: `3.jpg`},
                  {src: `4.jpg`},
                  {src: `5.jpg`},
                  {src: `6.jpg`},
                  {src: `7.jpg`},
                  {src: `8.jpg`},
                  {src: `9.jpg`},
                  {src: `10.jpg`},
                  {src: `11.jpg`},
                  {src: `12.jpg`},
                  {src: `13.jpg`},
                  {src: `14.jpg`},
                  {src: `15.jpg`},
                  {src: `16.jpg`},
                  {src: `17.jpg`},
                  {src: `18.jpg`},
                  {src: `19.jpg`},
                  {src: `20.jpg`},
                  {src: `21.jpg`},
                  {src: `22.jpg`},
                  {src: `23.jpg`},
                  {src: `24.jpg`},
                  {src: `25.jpg`},
                  {src: `26.jpg`},
                  {src: `27.jpg`},
                  {src: `28.jpg`},
                  {src: `29.jpg`},
                  {src: `30.jpg`},
                  {src: `31.jpg`},
                  {src: `32.jpg`},
                  {src: `33.jpg`},
                  {src: `34.jpg`},
                  {src: `35.jpg`},
                  {src: `36.jpg`},
                  {src: `37.jpg`},
                  {src: `38.jpg`},
                  {src: `39.jpg`},
                  {src: `40.jpg`},
                  {src: `41.jpg`},
                  {src: `42.jpg`},
                  {src: `43.jpg`},
                  {src: `44.jpg`},
                  {src: `45.jpg`},
                  {src: `46.jpg`},
                  {src: `47.jpg`},
                  {src: `48.jpg`},
                  {src: `49.jpg`},
                  {src: `50.jpg`},
                  {src: `51.jpg`},
                  {src: `52.jpg`},
                  {src: `53.jpg`},
                  {src: `54.jpg`},
                  {src: `55.jpg`},
                  {src: `56.jpg`},
                  {src: `57.jpg`},
                  {src: `58.jpg`},
                  {src: `59.jpg`},
                  {src: `60.jpg`},
                  {src: `61.jpg`},
                  {src: `62.jpg`},
                  {src: `63.jpg`},
                  {src: `64.jpg`},
                  {src: `65.jpg`},
                  {src: `66.jpg`},
                  {src: `67.jpg`},
                  {src: `68.jpg`},
                  {src: `69.jpg`},
                  {src: `70.jpg`},
                  {src: `71.jpg`},
                  {src: `72.jpg`},
                  {src: `73.jpg`},
                  {src: `74.jpg`},
                  {src: `75.jpg`},
                  {src: `76.jpg`},
                  {src: `77.jpg`},
                  {src: `78.jpg`},
                  {src: `79.jpg`},
                  {src: `80.jpg`},
                  {src: `81.jpg`},
                  {src: `82.jpg`},
                  {src: `83.jpg`},
                  {src: `84.jpg`},
                  {src: `85.jpg`},
                  {src: `86.jpg`},
                  {src: `87.jpg`},
                  {src: `88.jpg`},
                  {src: `89.jpg`},
                  {src: `90.jpg`},
                  {src: `91.jpg`},
                  {src: `92.jpg`},
                  {src: `93.jpg`},
                  {src: `94.jpg`},
                  {src: `95.jpg`},
                  {src: `96.jpg`},
                  {src: `97.jpg`},
                  {src: `98.jpg`},
                  {src: `99.jpg`},
                  {src: `100.jpg`},
                  ];

  return (
     <section className='section' aria-labelledby='example2'>
      <header className='section-header'>
        <h2 id='example2'>
          Galeria
        </h2>
        <p>
          A default carousel example has lazy loading and preloading (the 2
          adjacent images on either side of the current image); touch swiping
          and mouse dragging on the carousel; touch swiping, mouse dragging and
          wheel scrolling on the thumbnails; touch swipe down to exit the
          maximized carousel; and keyboard navigation.
        </p>
      </header>
      <div className='carousel-container' >
        <Carousel images={images} />
      </div>
    </section>
  );
};

export default App;