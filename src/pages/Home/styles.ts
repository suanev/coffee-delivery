import styled from "styled-components";

export const Hero = styled.section`
  display: flex;

  background-size: cover;
  background-position: center;
  background-image: url("./src/assets/hero-bg.svg");
`;

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    ${({ theme }) => theme.fonts.titleXL}
    color: ${({ theme }) => theme.colors.baseTitle}
  }

  span {
    ${({ theme }) => theme.fonts.textL}
    color: ${({ theme }) => theme.colors.baseSubtitle}
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
`;

export const CoffeeList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1160px;
  margin: 32px auto;

  h2 {
    ${({ theme }) => theme.fonts.titleL}
    color: ${({ theme }) => theme.colors.baseSubtitle}
  }
`;

export const CoffeeListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 20px 0;

  background-color: ${({ theme }) => theme.colors.baseCard};
  border-radius: 6px 36px 6px 36px;

  img {
    width: 120px;
    height: 120px;

    margin-top: -20px;
  }

  h4 {
    ${({ theme }) => theme.fonts.titleS}
    color: ${({ theme }) => theme.colors.baseSubtitle}
  }

  p#description {
    margin-top: 8px;
    max-width: 216px;

    text-align: center;
    ${({ theme }) => theme.fonts.textS}
    color: ${({ theme }) => theme.colors.baseLabel}
  }
`;

export const CoffeeCardTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 16px;

  span {
    text-align: center;
    text-transform: uppercase;

    padding: 4px 8px;
    margin-top: 16px;
    border-radius: 100px;

    ${({ theme }) => theme.fonts.tag};
    color: ${({ theme }) => theme.colors.yellowDark};
    background-color: ${({ theme }) => theme.colors.yellowLight};
  }
`;

export const CoffeeCardFooter = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 34px;
  margin-bottom: 20px;

  > div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;

export const CoffeeCardPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 24px;

  gap: 3px;

  > p {
    ${({ theme }) => theme.fonts.titleM};
    color: ${({ theme }) => theme.colors.baseText};
  }

  > span {
    ${({ theme }) => theme.fonts.textM};
  }
`;
