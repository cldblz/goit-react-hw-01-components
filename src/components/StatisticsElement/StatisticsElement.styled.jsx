import styled from '@emotion/styled'

export const StatElement = styled.li`
    display: flex;
    width: 60px;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px 10px;

    color: var(--color-white);

    border-right: 1px solid var(--color-dark-gray);
    border-bottom: 1px solid var(--color-dark-gray);

    ${props => setRandomBg(props.statsQuantity)}

    &:first-of-type {
        border-left: 1px solid var(--color-dark-gray);
        border-radius: 0px 0px 0px 6px;
    }

    &:last-of-type {
        border-radius: 0px 0px 6px 0px;
    }

`

export const Label = styled.span`
    font-size: 12px;
    margin-bottom: 5px;
`

export const Percentage = styled.span`
    font-weight: 700;
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setRandomBg(number) {
    const cssStyles = [];
    for (let i = 1; i <= number; i += 1) {
        cssStyles.push(`&:nth-of-type(${i}) {background-color: ${getRandomHexColor()};}`)
    }
    return cssStyles.join("")
}
