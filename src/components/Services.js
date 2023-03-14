import React from 'react'
import Title from './Title'
import Service from './Service';
import { services } from '../data';

export const Services = () => {
    return (
        <section className="section services" id="services">
            <Title title="Our" subTitle="services" />
            <div className="section-center services-center">
                {services.map((service) => {
                    return (
                        <Service key={service.key} {...service} />
                    )
                })}
            </div>
        </section>
    )
}
