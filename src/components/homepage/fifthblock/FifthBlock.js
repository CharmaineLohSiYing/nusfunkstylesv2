import Block from '../../common/Block';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from './CarouselItem';
import founders from '../../../data/founders.json'


export default function FifthBlock() {
    return (
        <Block backgroundColor="bg-purple">
            <div className="w-100 pb-4">
                <div className="d-flex flex-column justify-content-center">
                    <div className={"text-xl text-center montserrat-regular orange "}>How was the club formed?</div>
                    <div className={"text-xxl text-center montserrat-bold orange "}>Let’s hear from the founders
                    </div>
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
