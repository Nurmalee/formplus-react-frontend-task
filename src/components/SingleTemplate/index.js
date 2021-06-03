import { TemplateBox } from './styles'
import PropTypes from 'prop-types'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { styles } from '../../styles/styles'

const SingleTemplate = ({description, link, name}) => {
    return (
        <TemplateBox data-test='singleTemplateBox'>
            <h2 data-test='singleTemplateTitle'>{name}</h2>
            <p data-test='singleTemplateDesc'>{description}. This description doesn't contain enough words for proper design rendering so I have decided to inclue this joker.. Hope you don't mind </p>
            <a href={link} data-test='singleTemplateLink'>use template <ArrowNarrowRightIcon style={styles.smallIcon} /> </a>
        </TemplateBox>
    )
}

SingleTemplate.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
}

export default SingleTemplate