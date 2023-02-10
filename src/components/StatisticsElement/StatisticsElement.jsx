import PropTypes from 'prop-types';
import { StatElement,Label,Percentage} from './StatisticsElement.styled';

const StatisticsElement = ({label, percentage, statsQuantity }) => {
    return (
        <StatElement statsQuantity={statsQuantity} >
            <Label>{label}</Label>
            <Percentage >{percentage}%</Percentage>
        </StatElement>
    )
}

StatisticsElement.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default StatisticsElement