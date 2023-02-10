import styled from '@emotion/styled'

export const Item = styled.li`
    width: 300px;
    padding: 5px 10px 5px 10px;
    display: flex;
    align-items: center;
    :not(:last-of-type) {
        margin-bottom: 10px;
    }

    background-color: var(--color-white);
    box-shadow: 1px 1px 1px var(--color-dark-gray), -1px 1px 1px var(--color-dark-gray);
`

export const Status = styled.span`
    display: block;
    width: 10px;
    height: 10px;
    margin-right: 10px;

    border-radius: 50%;
    background-color: ${props => props.status ? "var(--color-green)" : "var(--color-red)"};
`

export const Avatar = styled.img`
    margin-right: 10px;
    border: 1px solid var(--color-dark-gray);
    border-radius: 4px;
`

export const Name = styled.p`
    font-size: 18px;
`