import React from 'react';
import Title from './Title';
import Tour from './Tour';
import { tours } from '../data';

export const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title="featured" subTitle="tours" />
            <div className="section-center featured-center">
                {tours.map((tour) => {
                    // const { id, image, title, date, info, location, duration, cost } = tour;
                    return (
                        <Tour key={tour.id} {...tour} />
                    )
                })}
            </div>
        </section>
    )
}
