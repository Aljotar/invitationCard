import Carousel from 'react-bootstrap/Carousel';
import Tadeo1 from "../utilities/images/Tadeo2.jpeg";
import Tadeo2 from "../utilities/images/Tadeo3.jpeg";
import Tadeo3 from "../utilities/images/Tadeo4.jpeg";

function CarouselTadeo() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={Tadeo1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={Tadeo2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={Tadeo3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTadeo;