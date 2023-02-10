import PropTypes from 'prop-types';
import { StatList} from './StatisticsList.styled';
import StatisticsElement from 'components/StatisticsElement/StatisticsElement';

const StatisticsList = ({ stats }) => {
    return (
        <StatList>
            {stats.map(({ id, label, percentage }) => (
                <StatisticsElement key={id} label={label} percentage={percentage} statsQuantity={stats.length} />
            ))}
        </StatList>
    )
}

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
    })).isRequired
}

export default StatisticsList