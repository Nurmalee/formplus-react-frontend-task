
import styled from 'styled-components'
import {InformationCircleIcon} from '@heroicons/react/outline'
import {styles} from '../styles'

const Notification = () => {
    return (
        <NotificationContainer>
            <InformationCircleIcon style={styles.informationCircleIcon} /> <p> Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>
        </NotificationContainer>
    )
}

export default Notification

const NotificationContainer = styled.div`
    border-radius: 2px;
    background-color: #FFF4EA;
    padding: 15px 20px;
    width: ${styles.containerWidth};
    margin: 30px auto;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    > p {
        font-size: 14px;
    }
`