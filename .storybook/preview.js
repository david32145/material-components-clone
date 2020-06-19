import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StoryContainer from "./StoryContainer"

addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline',
        },
        body: {
          padding: 0,
          marginBottom: 30
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        padding: '0px 5px',
        lineHeight: '2',
      },
    },
    inline: true,
    source: true,
  })
);

addDecorator((storyFn) => <StoryContainer align="center">{storyFn()}</StoryContainer>);
