import styled from "styled-components"
import { rgba } from "polished"
import imgEquilibrium from "~/assets/equilibrium.jpg"
import imgAvatar from "~/assets/avatar.png"
import iconClock from "~/assets/clock.svg"
import iconEthereum from "~/assets/ethereum.svg"
import iconView from "~/assets/view.svg"

export const Card = () => {
  return (
    <StyledCard>
      <ImageWrapper>
        <img src={imgEquilibrium} alt="equilibrium" />
        <ImageOverlay />
      </ImageWrapper>
      <Title>Equilibrium #3429</Title>
      <Description>
        Our Equilibrium collection promotes balance and calm.
      </Description>
      <Info>
        <Price>
          <img src={iconEthereum} alt="icon ethereum" />
          <span>0.041 ETH</span>
        </Price>
        <Remaining>
          <img src={iconClock} alt="icon clock" />
          <span>3 days left</span>
        </Remaining>
      </Info>
      <Divider />
      <Creator>
        <Avatar src={imgAvatar} alt="creator avatar" />
        <span>
          <span>Creation of</span> <a href="#">Jules Wyvern</a>
        </span>
      </Creator>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  width: calc(100% - 2.4rem);
  padding: 2.4rem 2.4rem 3.2rem;
  background-color: ${props => props.theme.color.yankeesBlue};
  border-radius: 1.5rem;
  box-shadow: 0 2.5rem 5rem rgba(0, 0, 0, 0.1);
`

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;
  margin-bottom: 2.4rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background-color: ${rgba("#00FFF8", 0.5)};
  opacity: 0;
  transition: opacity 200ms linear;

  &::after {
    content: url(${iconView});
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

const Title = styled.h1`
  margin-bottom: 1.6rem;
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semiBold};
  line-height: ${props => props.theme.typography.lineHeight.lg};
`

const Description = styled.p`
  margin-bottom: 2.4rem;
  color: ${props => props.theme.color.lightCobaltBlue};
  font-size: ${props => props.theme.typography.fontSize.md};
  font-weight: ${props => props.theme.typography.fontWeight.light};
  line-height: ${props => props.theme.typography.lineHeight.md};
`

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.648rem;

  span {
    color: ${props => props.theme.color.aqua};
    font-size: ${props => props.theme.typography.fontSize.sm};
    font-weight: ${props => props.theme.typography.fontWeight.semiBold};
    line-height: ${props => props.theme.typography.lineHeight.sm};
  }
`

const Remaining = styled.div`
  display: flex;
  align-items: center;
  gap: 0.77rem;

  span {
    color: ${props => props.theme.color.lightCobaltBlue};
    font-size: ${props => props.theme.typography.fontSize.sm};
    font-weight: ${props => props.theme.typography.fontWeight.regular};
    line-height: ${props => props.theme.typography.lineHeight.sm};
  }
`

const Divider = styled.div`
  margin-bottom: 1.6rem;
  width: 100%;
  height: 0.1rem;
  background-color: ${props => props.theme.color.charcoal};
`

const Creator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  span {
    color: ${props => props.theme.color.lightCobaltBlue};
    font-size: ${props => props.theme.typography.fontSize.sm};
    font-weight: ${props => props.theme.typography.fontWeight.regular};
    line-height: ${props => props.theme.typography.lineHeight.sm};
    margin-top: -0.1rem;

    a {
      text-decoration: none;
      color: ${props => props.theme.color.white};

      &:hover {
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }
`

const Avatar = styled.img`
  width: 3.3rem;
  height: 3.3rem;
  border-radius: 50%;
  border: 0.1rem solid ${props => props.theme.color.white};
`
