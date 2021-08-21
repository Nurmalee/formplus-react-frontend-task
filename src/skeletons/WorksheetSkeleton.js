import styled, { keyframes } from 'styled-components'

const WorksheetSkeleton = () => {
    return (
        <WorksheetSkeletonBox>
            <WorksheetImage></WorksheetImage>
            <WorksheetTextSkeleton>
                <WorksheetTitle></WorksheetTitle>
                {[1,2,3].map(n => <WorksheetParagraph key={n}></WorksheetParagraph>)}
            </WorksheetTextSkeleton>

            <ShinnerWrapper>
                <Shinner />
            </ShinnerWrapper>
        </WorksheetSkeletonBox>
    )
}

export default WorksheetSkeleton

const WorksheetSkeletonBox = styled.div`
    position: relative;
    border-radius: 5px;
    border: 1px solid #ddd;
`
const WorksheetImage = styled.div`
    height: 200px;
    background-color: whitesmoke;
`

const WorksheetTextSkeleton = styled.div`
    padding: 14px;
`

const WorksheetTitle = styled.div`
    padding: 14px;
    margin: 15px 0;
    background-color: whitesmoke;
`

const WorksheetParagraph = styled.p`
    background-color: whitesmoke;
    margin: 5px 0;
    padding: 7px;
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
    animation: ${shinner} 1.5s infinite;
`
const Shinner = styled.div`
    background-color: ${props => props.theme.skeletonShinnerBg};
    transform: skewX(-20deg);
    height: 100%;
    width: 80%;
`