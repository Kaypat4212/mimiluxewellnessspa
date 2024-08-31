import React from 'react';
import AOS from 'aos';
import { Row, Col, Card } from 'react-bootstrap';
import '../components/styles/services.css'; // Ensure this path is correct
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

const services = [
  {
    title: "Deep Tissue Massage",
    description: "A therapeutic massage that targets the deeper layers of muscle and connective tissue. It helps to relieve chronic pain and muscle tension.",
    price: "$100",
    imageUrl: deepTissueImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  },
  {
    title: "Face Massage",
    description: "A gentle massage that focuses on the facial muscles, aiming to relieve stress, improve circulation, and enhance relaxation.",
    price: "$50",
    imageUrl: faceMassageImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  },
  {
    title: "Reflexology Massage",
    description: "A type of massage that focuses on pressure points in the feet, hands, and ears, which are believed to correspond to different organs and systems in the body.",
    price: "$100",
    imageUrl: reflexologyImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  },
  {
    title: "Shiatsu Massage",
    description: "A Japanese massage technique that uses finger pressure on acupressure points to balance the body's energy flow and promote healing.",
    price: "$50",
    imageUrl: shiatsuImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  },
  {
    title: "Aromatherapy Massage",
    description: "A massage that incorporates essential oils to enhance the therapeutic benefits. The oils are chosen based on their individual properties and effects.",
    price: "$50",
    imageUrl: aromatherapyImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  },
  {
    title: "Swedish Massage",
    description: "A classic massage technique that uses long, gliding strokes to relax the muscles, improve circulation, and enhance overall relaxation.",
    price: "$50",
    imageUrl: swedishImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  },
  {
    title: "Nuru Massage",
    description: "A Japanese massage style that involves full-body contact and the use of a special nuru gel, providing a sensual and deeply relaxing experience.",
    price: "$50",
    imageUrl: nuruImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  },
  {
    title: "Hot Stone Massage",
    description: "A massage that uses heated stones to help relax muscles, improve circulation, and provide a deeply soothing and therapeutic experience.",
    price: "$50",
    imageUrl: hotStoneImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  },
  {
    title: "Myofascial Release Massage",
    description: "A type of massage that focuses on releasing tension in the fascia (connective tissue) to relieve pain and restore normal movement patterns.",
    price: "$50",
    imageUrl: myofascialImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  },
  {
    title: "Thai Massage",
    description: "An ancient massage technique that combines acupressure, Indian Ayurvedic principles, and assisted yoga postures to improve flexibility and balance energy.",
    price: "$50",
    imageUrl: thaiImg,
    button: {
      label: "Book Now",
      url: "/book"
    },
  }
];

AOS.init();

const Services = () => {
  return (
    <div className="services-page">
      <h2 className="text-center">Our Services</h2>
      <p className="text-center">
        Discover the range of luxurious treatments we offer at Mimiluxe Wellness Spa.
      </p>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className='cardd'>
              <Card.Img
                data-aos="zoom-in-left"
                variant="top"
                className='cardimg'
                src={service.imageUrl}
                alt={service.title}
              />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <div className='d-flex'>
                  <div className='flex-grow-1'>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text data-aos="fade-down-right">{service.description}</Card.Text>
                  </div>
                  <div className='price-table'>
                    <table>
                      <tbody>
                        <tr data-aos="zoom-in-left"
                variant="left">
                          {/* <td></td> */}
                          <td >{service.price}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {service.button && (
                  <a href={service.button.url} className="mt-5 buttonn">
                    {service.button.label}
                  </a>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
