import styled from '@emotion/styled'

export const TransactionsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;

    background-color: var(--color-light-gray);
`

export const Table = styled.table`
    width: 600px;

    background-color: var(--color-white);
    border-radius: 4px 4px 4px 4px;
    box-shadow: 1px 1px 1px var(--color-gray), -1px 1px 1px var(--color-gray);
`

export const TableHeader = styled.thead`
    background-color: var(--color-dark-blue);
    text-transform: uppercase;
    color: var(--color-white);
`

export const HeaderCell = styled.th`
    padding: 10px 0px 10px;

    font-size: 14px;
`
