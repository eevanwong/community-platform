import { Component } from 'react';
import theme from 'src/themes/styled.theme'
import { Link, Flex, Image } from 'rebass/styled-components'
import styled from 'styled-components'

import PPLogo from 'src/assets/images/precious-plastic-logo-official.svg'
import Text from 'src/components/Text'
import { VERSION } from 'src/config/config'

interface IProps {
  isMobile?: boolean
}

const LogoContainer = styled(Flex)`
  align-items: center;
  position: relative;
  padding: 10px 0;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: -50px;
    padding: 0;
  }
`

export class Logo extends Component<IProps> {
  // eslint-disable-next-line
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <>
        <LogoContainer>
          <Link
            sx={{ zIndex: 1000, display: 'flex', alignItems: 'center' }}
            color="black"
            ml={[0, 4]}
            href="/"
          >
            <Flex
              sx={{
                width: ['50px', '50px', '100px'],
                height: ['50px', '50px', '100px'],
              }}
            >
              <Image
                src={PPLogo}
                width={[50, 50, 100]}
                height={[50, 50, 100]}
                alt={'PP Logo v' + VERSION}
                title={'PP Logo v' + VERSION}
              />
            </Flex>
            <Text
              className="sr-only"
              ml={2}
              display={['none', 'none', 'block']}
            >
              Precious Plastic
            </Text>
          </Link>
        </LogoContainer>
      </>
    )
  }
}

export default Logo
