import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;

    background-color: var(--color-gray);
`

export const Description = styled.div`
    width: 300px;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-white);
    border: 1px solid var(--color-dark-gray);
    border-radius: 6px 6px 0px 0px;
`

export const Avatar = styled.img`
    width: 100px;
    margin-bottom: 30px;

    border-radius: 50%;
    border: 1px solid var(--color-dark-gray);
`

export const Name = styled.p`
    margin-bottom: 10px;

    font-weight: 700;
    font-size: 20px;
`

export const Tag = styled.p`
    margin-bottom: 10px;

    font-size: 14px;
    color: var(--color-dark-gray);

`

export const Location = styled.p`
    color: var(--color-dark-gray);
`

export const Stats = styled.ul`
    width: 300px;
    display: flex;

    background-color: var(--color-white);
    border: 1px solid var(--color-dark-gray);
    border-top: 0;
    border-radius: 0px 0px 6px 6px;
`

export const StatElement = styled.li`
    width: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-blue);

    &:not(:last-of-type) {
        border-right: 1px solid var(--color-dark-gray);
    }

    &:first-of-type {
        border-radius: 0px 0px 0px 5px;
    }

    &:last-of-type {
        border-radius: 0px 0px 5px 0px;
    }
`

export const Label = styled.span`
    margin-bottom: 5px;

    color: var(--color-dark-gray);
`

export const Quantity = styled.span`
    font-weight: 700;
`