import React from 'react';
import {
  Chrome,
  Body,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText
} from '@zendeskgarden/react-chrome';
import { ReactComponent as HeaderIcon } from '@zendeskgarden/svg-icons/src/26/app.svg';
import { PALETTE } from '@zendeskgarden/react-theming';

const SimpleHeader = () => {

  return(
      <Chrome isFluid style={{ height: 80 }}>
        <Body>
          <Header isStandalone>
            <HeaderItem hasLogo>
              <HeaderItemIcon>
                <HeaderIcon style={{ color: PALETTE.blue[400] }} />
              </HeaderItemIcon>
              <HeaderItemText>Zendesk Garden</HeaderItemText>
            </HeaderItem>
          </Header>
        </Body>
      </Chrome>
  )
}

export default SimpleHeader
