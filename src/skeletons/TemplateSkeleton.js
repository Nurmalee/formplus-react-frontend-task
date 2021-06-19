import styled from 'styled-components'

const TemplateSkeleton = () => {
    return (
        <TemplateSkeletonBox>
            <TemplateTextSkeleton>
                <TemplateTitle></TemplateTitle>
                {[1,2,3].map(n => <TemplateParagraph key={n}></TemplateParagraph>)}
            </TemplateTextSkeleton>
            <Link></Link>
        </TemplateSkeletonBox>
    )
}

export default TemplateSkeleton

const TemplateSkeletonBox = styled.div`
    border-radius: 5px;
    border: 1px solid ${props => props.theme.borderColor};
    /* box-shadow: 0 0 4px ${props => props.theme.borderColor}; */
    color: ${props => props.theme.textColor};
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