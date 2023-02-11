import PropTypes from 'prop-types';
import {StatisticsContainer, Title} from './Statistics.styled';
import StatisticsList from 'components/StatisticsList/StatisticsList';

const Statistics = ({ stats, title }) => {
    return (
        <StatisticsContainer>
            {title && (<Title >{title}</Title>)}
            <StatisticsList stats={stats}/>
        </StatisticsContainer>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
    })).isRequired,

    title: PropTypes.string
}

export default Statistics