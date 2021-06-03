import {NotificationContainer} from './styles'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { styles } from '../../styles/styles'

const Notification = () => {
    return (
        <NotificationContainer  data-test='notificationContainer'>
            <InformationCircleIcon style={styles.informationCircleIcon} />
            <p data-test='notificationIndicator'> Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>
        </NotificationContainer>
    )
}

export default Notification