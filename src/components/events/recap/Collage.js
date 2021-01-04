import Block from '../../common/Block';
import styles from './Collage.module.css'

const Collage = (props) => {

    const baseAddress = "assets/events/photos/"
    const containerClasses = [styles.container,"d-flex", "w-100"];

    props.right ? containerClasses.push(styles.right) : containerClasses.push(styles.left)

    return (
        <Block backgroundColor="bg-orange">
            <div className={containerClasses.join(' ')} >
                <div className={styles.col + " " + styles['col-lg']}>
                    <div className={"w-100 text-center text-uppercase montserrat-bold white text-xl " + styles.subtitle}>
                        {props.subtitle}
                    </div>
                    <div className={styles['info-container']}>
                         <img className={styles.pic + " " + styles['pic-lg'] } src={baseAddress + props.main} alt={props.main}/>
                         <div className={"bg-purple-translucent center " + styles.information}>
                            <div className={"white center " + styles['info-content']}>
                                {
                                    props.information.map((text, index) => (
                                        <div key={index}>
                                        {text}
                                        </div>
                                    ))
                                }
                            </div>
                         </div>
                    </div>
                   
                </div>
                <div className={styles.col + " " + styles['col-sm']}>
                    <img className={styles.pic + " " + styles['pic-sm']} src={baseAddress + props.firstSmall} alt={props.firstSmall}/>
                    <img className={styles.pic + " " + styles['pic-sm']} src={baseAddress + props.secondSmall} alt={props.secondSmall}/>
                </div>
            </div>
        </Block>
        
        
    )
}

export default Collage;