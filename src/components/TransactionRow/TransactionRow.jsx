import PropTypes from 'prop-types';
import { Row, Cell} from './TransactionRow.styled';

const TransactionRow = ({type, amount, currency }) => {
    return (
        <Row>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
        </Row>
    )
}

TransactionRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionRow
