import styled, { keyframes } from 'styled-components'

const TemplateSkeleton = () => {
    return (
        <TemplateSkeletonBox>
            <TemplateTextSkeleton>
                <TemplateTitle></TemplateTitle>
                {[1,2,3].map(n => <TemplateParagraph key={n}></TemplateParagraph>)}
            </TemplateTextSkeleton>
            <Link></Link>

            <ShinnerWrapper>
                <Shinner />
            </ShinnerWrapper>
        </TemplateSkeletonBox>
    )
}

export default TemplateSkeleton

const TemplateSkeletonBox = styled.div`
    position: relative;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.textColor};
    overflow: hidden;
`

const TemplateTextSkeleton = styled.div`
    padding: 14px;
`

const TemplateTitle = styled.div`
    padding: 14px;
    margin: 15px 0;
    background-color: ${props => props.theme.skeletonTextBg};
`

const TemplateParagraph = styled.p`
    background-color: ${props => props.theme.skeletonTextBg};
    margin: 5px 0;
    padding: 7px;
`

const Link = styled.article`
    padding: 20px 15px;
    background-color: ${props => props.theme.skeletonTextBg};
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
`
const shinner = keyframes`
  0% {
    transform: translateX(-150%);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(150%);
  }
`

const ShinnerWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    animation: ${shinner} 2.5s infinite;
`
const Shinner = styled.div`
    background-color: ${props => props.theme.skeletonShinnerBg};
    transform: skewX(-20deg);
    height: 100%;
    width: 80%;
`