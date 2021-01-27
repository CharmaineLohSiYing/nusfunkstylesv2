import styles from './Block.module.css'

export default function Block(props) {

    const backgroundClasses = ["d-flex", "justify-content-center", "align-items-center","position-relative"];
    const contentClasses = [];
    const imageClasses = [];

    if (!props.imageBackground){
        backgroundClasses.push(styles['container-padding']);
        backgroundClasses.push(props.backgroundColor);
        contentClasses.push(styles['non-padded-content'])
    } else {
        // image background
        if (props.padding){
            // content: full-sized, absolute-positioned, with padding
            contentClasses.push(styles['padded-content'])
            contentClasses.push(styles['container-padding'])
        } else {
            contentClasses.push(styles['non-padded-content'])
        }

        imageClasses.push('bg')

        if (props.resize){
            imageClasses.push(props.resize);
        }
    }
    
    
    return (
        <div className={backgroundClasses.join(' ')}>
            {props.imageBackground && <img 
                className={imageClasses.join(' ')} 
                src={props.imageBackground} 
                srcSet={props.srcSet}
                alt={props.alt}>
            </img>}
            <div className={contentClasses.join(' ')}>
                {props.children}
            </div>
        </div>
    )
}
