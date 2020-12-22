import React from 'react'
import Block from '../../common/Block';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from './CarouselItem';
import founders from '../../../data/founders.json'


export default function FifthBlock() {
    return (
        <Block backgroundColor="bg_purple">
            <div className="w-100">
                <div className="d-flex flex-column justify-content-center">
                    <h4 className={"text-center montserrat_regular orange "}>How was the club formed?</h4>
                    <h3 className={"text-center montserrat_bold orange "}>Let’s hear from the founders
                    </h3>
                </div>
                <Carousel controls={false}>
                    {founders.map((founder) => (
                        <Carousel.Item>
                            <CarouselItem speech={founder.speech} name={founder.name} position={founder.position} key={founder.name}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </Block>
    )
}
