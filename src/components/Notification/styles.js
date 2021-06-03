import styled from 'styled-components'
import { styles } from '../../styles/styles'

export const NotificationContainer = styled.div`
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