import React from 'react';
import ServiceCard from './ServiceCard';
import { Col, Row } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eveniet perferendis magnam mollitia ipsa cupiditate, quam dolores sapiente veniam, iusto ea molestiae! Eius, harum est asperiores quisquam blanditiis tempore consequuntur?",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eveniet perferendis magnam mollitia ipsa cupiditate, quam dolores sapiente veniam, iusto ea molestiae! Eius, harum est asperiores quisquam blanditiis tempore consequuntur?",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eveniet perferendis magnam mollitia ipsa cupiditate, quam dolores sapiente veniam, iusto ea molestiae! Eius, harum est asperiores quisquam blanditiis tempore consequuntur?",
    },
];

const ServiceList = () => {
    return (
       <>
        {servicesData.map((item, index) => (
                <Col lg="3" key={index}> 
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList;
