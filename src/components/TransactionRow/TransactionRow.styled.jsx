import styled from '@emotion/styled'

export const Row = styled.tr`
    &:nth-of-type(even) {
        background-color: var(--color-gray);
    }
`

export const Cell = styled.td`
    padding: 5px 0px 5px;

    text-align: center;
    font-size: 14px;
    text-transform: capitalize;
`