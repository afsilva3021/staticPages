import { AutoComplete } from 'antd';
import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-flex justify-content-center w-50"
          src=" /images/iphone-wallpaper.webp"
          alt="First slide"
          style={{
            margin: 'auto',
            width: 900,
            height: 600,
            maxWidth: 'auto',
            maxHeight: 'auto'
          }}
        />
        <Carousel.Caption>
          <h5 className='text-white'>Temos os melhores Iphone</h5>
          <p className='text-white'>Iphone 15 pro max, Iphone 14 pro max, Iphone 13 pro</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;