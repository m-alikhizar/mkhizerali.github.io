import React from 'react'
import SubHeader from './SubHeader'
import styled from 'styled-components'
import Meta from './Meta'


const Wrapper = styled.a`
  display: block;
  width: 100%;
  display: flex;
  margin: 18px 0px;
  border-radius: 3px;
  border: 1px solid #eee;
  text-decoration: none;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  margin: 0px 8px;
  flex-flow: column nowrap;
`

const Image = ({ path }) => {
  const style = {
    backgroundImage: `url(${path})`,
    width: '48px',
    height: '48px',
    flex: '0 0 auto',
    borderTopLeftRadius: '2px',
    borderBottomLeftRadius: '2px',
    backgroundColor: 'white',
    flexFlow: 'column nowrap',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return <div style={style}></div>
}

const headerStyle = {
  margin: 0,
  maxWidth: '500px',
  width: 'initial',
  height: '24px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const ExtendedLink = (props) => {
  return (
    <Wrapper href={props.link} target='_blank'>
      <Image path={props.image}></Image>
      <Content>
        <SubHeader style={headerStyle}>{props.title}</SubHeader>
        <Meta style={{margin: '4px 0', color: '#aaa', fontSize: '10px'}}>{props.meta}</Meta>
      </Content>

    </Wrapper>
  )
}

export default ExtendedLink
