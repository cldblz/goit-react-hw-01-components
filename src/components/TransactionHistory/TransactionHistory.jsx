import PropTypes from 'prop-types';
import {TransactionsContainer, Table, TableHeader, HeaderCell} from './TransactionHistory.styled';
import TransactionRow from 'components/TransactionRow/TransactionRow';

const TransactionHistory = ({ items }) => {
    return (
        <TransactionsContainer>
            <Table>
                <TableHeader>
                    <tr>
                        <HeaderCell>Type</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Currency</HeaderCell>
                    </tr>
                </TableHeader>
                <tbody>
                    {items.map(({id, type, amount, currency}) =>(
                        <TransactionRow key={id} type={type} amount={amount} currency={currency} />))}
                </tbody>
            </Table>
        </TransactionsContainer>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}

export default TransactionHistory