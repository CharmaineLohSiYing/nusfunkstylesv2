import React from 'react'
import styles from './Committee.module.css';
import Block from '../common/Block';

const Member = ({position, name}) => {
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="orange">
                {position}
            </div>  
            <div className="orange px-2">|</div>
            <div>
                {name}
            </div>
        </div>
    )
}

export default function SecondBlock() {
    return (
        <Block imageBackground="assets/community/photos/Committee.jpg" alt="Committee Picture">
                   <div className={"w-75 over_bg center"}>
                       <div className={"text-center montserrat_bold white " + styles.title}>OUR FOUNDING COMMITTEE</div>
                       <div className={"montserrat_bold white " + styles.member}>
                            <Member position="laa" name="ksksks"/>
                       </div>
                   </div>
        </Block>
    )
}
