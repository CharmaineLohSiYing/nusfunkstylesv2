import React from 'react'
import Block from '../../common/Block';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from './CarouselItem';

const melissaSpeech = `A common love for popping and locking, and a shared desire for
a conducive environment for dancers to learn and grow while having fun, made NUS
Funkstyles what it is today.`;

const louisSpeech =  `We wanted to dance in NUS and realised many like-minded street
dancers did too, so it happened rather naturally from random sessions, into a more
structured format.`;

const yingminSpeech =  `The non-toxic dance culture, humility and respect towards every
dancer in the dance cyphers - these were what made me decide to embark on this
journey with my friends.`;

const reicoSpeech =    `It felt like we naturally transitioned from being a rag-tag
group who would consistently gather at (and get chased out of) AS7 to something more
structured and catered for everyone.`;

const mujungSpeech =   `You fall in love. It just happens!`;

const zhanhuiSpeech =  `The passion of dance brought together a group of like-minded
friends who wanted to spread the funk and freestyle culture (which was not prevalent
in NUS then) to NUS! `;

const tinshenSpeech = `A bunch of us got together, went a lil nuts, to see how far we
could stretch it. It took some effort, but it was worth it.`;

const data = [
    {
        key: 1,
        name: 'Melissa Lim',
        position: 'President',
        speech: melissaSpeech
    }, 
    {
        key: 2,
        name: 'Louis Kwek',
        position: 'Dance Captain',
        speech: louisSpeech
    },
    {
        key: 3,
        name: 'Wang Yingmin',
        position: 'Vice-President',
        speech: yingminSpeech
    },
    {
        key: 4,
        name: 'Reico Ng',
        position: 'Treasurer',
        speech: reicoSpeech
    }, 
    {
        key: 5,
        name: 'Shih Mu Jung',
        position: 'Secretary',
        speech: mujungSpeech
    },
    {
        key: 6,
        name: 'Lee Zhanhui',
        position: 'Advisor',
        speech: zhanhuiSpeech
    },
    {
        key: 7,
        name: 'Yong Tinshen',
        position: 'Advisor',
        speech: tinshenSpeech
    },

];

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
                    {data.map((founder) => (
                        <Carousel.Item>
                            <CarouselItem speech={founder.speech} name={founder.name} position={founder.position} key={founder.key}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </Block>
    )
}
