import { AutoComplete } from 'antd';
import Carousel from 'react-bootstrap/Carousel';

export default function DarkVariantCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-flex justify-content-center w-50"
          src=" /images/apple-iphone-13-pro-max-1.jpg"
          alt="First slide"
          style={{
            margin: 'auto',
            maxWidth: 'auto',
            maxHeight: 'auto'
          }}
        />
        <Carousel.Caption className='text-dark bg-white opacity-75'>
          <h3 className='text-dark opacity-100'>Iphone 13 Pro Max</h3>
          <p className='text-dark opacity-100'>Temos todos os modelos e Cores</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item>
        <img
          className="d-flex justify-content-center w-50"
          src="/images/iphone-wallpaper.webp"
          alt="First slide"
          style={{
            margin: 'auto',
            maxWidth: 'auto',
            maxHeight: 'auto'
          }}
        />
        <Carousel.Caption className='text-dark bg-white opacity-75'>
          <h3 className='text-dark opacity-100'>Iphone 15 Pro</h3>
          <p className='text-dark opacity-100'>Iphone 15 pro aquela cor que você tanto quer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex justify-content-center w-50"
          src="/images/AppleWatch.jpeg"
          alt="First slide"
          style={{
            margin: 'auto',
            maxWidth: 'auto',
            maxHeight: 'auto'
          }}
        />
        <Carousel.Caption className='text-dark bg-white opacity-75'>
          <h3 className='text-dark opacity-100'>Os Melhores apple watch</h3>
          <p className='text-dark opacity-100'>Aqui você encontra o apple watch que combina com você.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

