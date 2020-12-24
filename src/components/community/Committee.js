import React, {useState} from 'react'
import styles from './Committee.module.css';
import Block from '../common/Block';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import founders from '../../data/founders.json'
import committees from '../../data/committees.json'


const Member = ({position, name}) => {
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="orange">
                {position}
            </div>  
            <div className="orange px-2">|</div>
            <div className="white">
                {name}
            </div>
        </div>
    )
}

export default function Committee() {

    const [displayFounders, setDisplayFounders] = useState(true);

    const chooseFounders = () => {
        setDisplayFounders(true)
    }

    const chooseCommittees = () => {
        setDisplayFounders(false)
    }

    return (
        <Block imageBackground="assets/community/photos/Committee.jpg" padding alt="Committee Picture">
            <div className={"d-flex flex-column"}>
                <ButtonGroup className="align-self-center mb-4">
                    <Button variant="outline-secondary" active={displayFounders} className={"montserrat_bold"} onClick={chooseFounders}>Founders</Button>
                    <Button variant="outline-secondary" active={!displayFounders} className={"montserrat_bold"} onClick={chooseCommittees}>Committees</Button>
                </ButtonGroup>
                <div className="center w-75">
                    <div className={"text-uppercase text-center montserrat_bold white pt-2 " + styles.title}>
                        {
                            displayFounders ? "Our Founding Committee" : ""
                        }
                    </div>
                    {
                        displayFounders ? 
                        (
                            <div className={"montserrat_bold white pt-4 " + styles.member}>
                                {founders.map(founder => (
                                    <Member position={founder.role + ", " + founder.position} name={founder.name}/>
                                ))}
                            </div>
                        )
                        :
                        (
                            <div className={"w-100 montserrat_bold white"}>
                                <Carousel id="committee_carousel" indicators={false}>
                                    {committees.map(committee => (
                                        <Carousel.Item>
                                            <div className="w-100">
                                                <div className={"text-center " + styles['text_xl']}>
                                                {committee.start} | {committee.end}
                                                </div>
                                                {committee.members.map(member => (
                                                    <Member position={member.position} name={member.name}/>
                                                ))}
                                            </div>
                                        </Carousel.Item>
                                        
                                    ))}
                                </Carousel>
                            </div>
                        )
                        
                        }
                </div>
                
            </div>
            
        </Block>
    )
}
