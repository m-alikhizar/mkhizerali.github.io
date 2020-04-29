import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import BlurOnScrollWrapper from './BlurOnScrollWrapper';

// import { generator } from 'uigradients';

const textStyle = {
  padding: '3px 0px',
  color: 'rgb(130, 130, 130)',
}
// ${generator({gradient: 'almost', angle:90})}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  transform: skewY(7deg);
  top: -28%;
  /*background: linear-gradient(90deg,  rgb(70, 198, 255),  rgb(6, 166, 239));*/
`

const Header = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      width: '100%',

    }}>
      <AppBar
        title="K_"
        iconStyleLeft={ {display: 'none'} }
        style= {{
          textAlign: 'right',
          boxShadow: 'none',
          background: 'rgba(255, 255, 255, 0.96)',
          borderBottom: '1px solid #f7f7f7',
        }}>
      </AppBar>

      <div style={{maxWidth: '680px', margin: '24px auto 0 auto', background: 'white', zIndex: 0}}>
          <BlurOnScrollWrapper>
            <Card style={{margin: '0 20px', height: '350px', borderRadius: '3px', background: 'transparent', position: 'relative', overflow: 'hidden', border: '1px solid #e0e0e0'}} zDepth={0}>
              <Background />
              <CardHeader
                titleStyle={{fontSize: '44px', marginTop: '24px'}}
                subtitleStyle={{fontSize: '14px'}}
                title="Khizar Ali Manzoor"
                subtitle='khizar.manzoor@hotmail.com'
              />
              <div style={{position: 'absolute', bottom: 20, left: 20}}>
              <a style={{textDecoration: 'none'}} href={'https://github.com/khizar-ali'}>
                <CardText style={textStyle}>
                  <Avatar style={{borderRadius: 0, background: 'transparent', width: '12px', height: '16px', verticalAlign: 'middle', marginRight: '8px'}}src={process.env.PUBLIC_URL + '/assets/github.png'}/>
                  {`github.com/khizar-ali`}
                </CardText>
              </a>
              <a style={{textDecoration: 'none'}} href={'https://linkedin.com/in/khizarmanzoor'}>
                <CardText style={textStyle}>
                  <Avatar style={{borderRadius: 0, background: 'transparent', width: '12px', height: '12px', marginRight: '8px'}}src={process.env.PUBLIC_URL + '/assets/linkedin.png'}/>
                  {`linkedin.com/in/khizarmanzoor`}
                </CardText>
              </a>
              </div>
              <Avatar style={{background: 'none', position: 'absolute', right: '20px', bottom: '20px', height: '123px', width: '123px', filter: 'grayscale(.33)'}}src={process.env.PUBLIC_URL + '/assets/profiledp.png'}/>
            </Card>
          </BlurOnScrollWrapper>
      </div>
    </div>
  )
}

export default Header
