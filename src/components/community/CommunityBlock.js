import React from 'react'
import styles from './CommunityBlock.module.css';
import Block from '../common/Block'


export default function CommunityBlock() {
    return (
        <Block imageBackground="assets/community/photos/Community main photo.jpg" alt="Group Picture">
            <div className={styles.text + " center montserrat_bold"}>
                Meet our community.
            </div>
        </Block>
    )
}
