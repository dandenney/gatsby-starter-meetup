import styled from "@emotion/styled"

export const Wrapper = styled.section`
  padding: 16px;

  @media screen and (min-width: 600px) {
    align-items: center;
    display flex;
    justify-content: center;
    height: 100vh;
  }
`

export const Card = styled.article`
  background: #121716;
  border-radius: 4px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  color: #fff;
  margin: 0 auto;
  max-width: 320px;
  padding-bottom: 1rem;
  text-align: center;

  h2 {
    color: #ec1981;
    margin-bottom: 0;
  }
`

export const Title = styled.h1`
  color: #ec1981;
  font-size: 28px;
  margin: 0.5rem 0 0 0;
`

export const SubTitle = styled.p`
  margin: 0;
  opacity: 0.75;
`

export const List = styled.ul`
  font-size: 20px;
  letter-spacing: 1px;
  list-style: none;
  margin: 0.5rem 0 0 0;
  padding: 0;

  li + li {
    margin-top: 0.25rem;
  }

  li:nth-child(2) {
    transform: rotate(2deg);
  }

  li:nth-child(3) {
    padding-left: 2rem;
  }

  li:nth-child(4) {
    margin-left: -1rem;
    transform: rotate(-1deg);
  }

  li:nth-child(6) {
    transform: rotate(1deg);
  }
`
