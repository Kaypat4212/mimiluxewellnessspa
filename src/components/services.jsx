import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../components/styles/services.css'; // Import specific styles for Services
// Ensure these paths are correct; adjust based on your project structure
import deepTissueImg from './images/deeptissue.jpg';
import faceMassageImg from './images/facemassage.jpg';
import reflexologyImg from './images/ReflexologyMassage.jpg';
import shiatsuImg from './images/ShiatsuMassage.jpg';
import aromatherapyImg from './images/AromatherapyMassage.webp';
import swedishImg from './images/sweedishmassage.jpg';
import nuruImg from '../components/images/NuruMassage.jpg';
import hotStoneImg from './images/hot-stone-massage.jpg';
import myofascialImg from './images/myofascial-release-massage.jpg';
import thaiImg from './images/thai-massage.jpg';
import { Link } from 'react-router-dom';
import './styles/home.css';

// Define your services with imported image URLs
const services = [
  {
    title: "Deep Tissue Massage",
    description: "A therapeutic massage that targets the deeper layers of muscle and connective tissue. It helps to relieve chronic pain and muscle tension.",
    imageUrl: deepTissueImg,
    button: {
      label: "Book Now",
      url: "https://example.com/book-thai-massage"
    },
  },
  {
    title: "Face Massage",
    description: "A gentle massage that focuses on the facial muscles, aiming to relieve stress, improve circulation, and enhance relaxation.",
    imageUrl: faceMassageImg,
    button: {
      label: "Book Now",
      url: "https://example.com/book-thai-massage"
    },
  },
  {
    title: "Reflexology Massage",
    description: "A type of massage that focuses on pressure points in the feet, hands, and ears, which are believed to correspond to different organs and systems in the body.",
    imageUrl: reflexologyImg,
    button: {
      label: "Book Now",
      url: "https://example.com/book-thai-massage"
    },
  },
  {
    title: "Shiatsu Massage",
    description: "A Japanese massage technique that uses finger pressure on acupressure points to balance the body's energy flow and promote healing.",
    imageUrl: shiatsuImg,
    button: {
      label: "Book Now",
      url: "https://example.com/book-thai-massage"
    },
  },
  {
    title: "Aromatherapy Massage",
    description: "A massage that incorporates essential oils to enhance the therapeutic benefits. The oils are chosen based on their individual properties and effects.",
    imageUrl: aromatherapyImg,
    button: {
      label: "Book Now",
      url: "https://example.com/book-thai-massage"
    },
  },
  {
    title: "Swedish Massage",
    description: "A classic massage technique that uses long, gliding strokes to relax the muscles, improve circulation, and enhance overall relaxation.",
    imageUrl: swedishImg,
    button: {
      label: "Book Now",
      url: "https://example.com/book-thai-massage"
    },
  },
  {
    title: "Nuru Massage",
    description: "A Japanese massage style that involves full-body contact and the use of a special nuru gel, providing a sensual and deeply relaxing experience.",
    imageUrl: nuruImg,
    button: {
      label: "Book Now",
      url: "https://example.com/book-thai-massage"
    },
  },
  {
    title: "Hot Stone Massage",
    description: "A massage that uses heated stones to help relax muscles, improve circulation, and provide a deeply soothing and therapeutic experience.",
    imageUrl: hotStoneImg,
    button: {
      label: "Book Now",
      url: "https://example.com/book-thai-massage"
    },
  },
  {
    title: "Myofascial Release Massage",
    description: "A type of massage that focuses on releasing tension in the fascia (connective tissue) to relieve pain and restore normal movement patterns.",
    imageUrl: myofascialImg,
    button: {
      label: "Book Now",
      url: "https://example.com/book-thai-massage"
    },
  },
  {
    title: "Thai Massage",
    description: "An ancient massage technique that combines acupressure, Indian Ayurvedic principles, and assisted yoga postures to improve flexibility and balance energy.",
    imageUrl: thaiImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  }
];

const Services = () => {
  return (
    <Container className="services-page">
      <h2 className="text-center">Our Services</h2>
      <p className="text-center">
        Discover the range of luxurious treatments we offer at Mimiluxe Wellness Spa.
      </p>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} lg={3} className="mb-4">
            <Card className='card'>
              <Card.Img variant="top" className='cardimg' src={service.imageUrl} alt={service.title} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                {service.button && (
                  <a href={service.button.url} className="btn btn-primary">
                    {service.button.label}
                  </a>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Link to="/book" className='btnn btn btn-success'>
        Book An Appointment Now
      </Link>
    </Container>
  );
};

export default Services;
