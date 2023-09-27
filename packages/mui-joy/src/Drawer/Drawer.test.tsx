import * as React from 'react';
import { expect } from 'chai';
import { createRenderer, describeConformance } from '@mui-internal/test-utils';
import { ThemeProvider } from '@mui/joy/styles';
import Drawer, { drawerClasses as classes } from '@mui/joy/Drawer';

describe('<Drawer />', () => {
  const { render } = createRenderer();

  describeConformance(
    <Drawer open>
      <div />
    </Drawer>,
    () => ({
      classes,
      inheritComponent: 'div',
      render,
      ThemeProvider,
      muiName: 'JoyDrawer',
      refInstanceof: window.HTMLDivElement,
      testComponentPropWith: 'header',
      testVariantProps: { hideBackdrop: true },
      slots: {
        root: { expectedClassName: classes.root },
        backdrop: { expectedClassName: classes.backdrop },
      },
      skip: [
        'classesRoot',
        'rootClass', // portal, can't determine the root
        'componentsProp', // TODO isRTL is leaking, why do we even have it in the first place?
        'themeDefaultProps', // portal, can't determine the root
        'themeStyleOverrides', // portal, can't determine the root
        'reactTestRenderer', // portal https://github.com/facebook/react/issues/11565
      ],
    }),
  );

  it('renders children', () => {
    const { getByText } = render(
      <Drawer open>
        <span>test</span>
      </Drawer>,
    );

    expect(getByText('test')).toBeVisible();
  });

  describe('slots: content', () => {
    it('has tabIndex={-1} by default', () => {
      const { getByTestId } = render(
        <Drawer open slotProps={{ content: { 'data-testid': 'content' } }}>
          <span>test</span>
        </Drawer>,
      );

      expect(getByTestId('content').getAttribute('tabIndex')).to.equal('-1');
    });

    it('can override tabIndex', () => {
      const { getByTestId } = render(
        <Drawer open slotProps={{ content: { 'data-testid': 'content', tabIndex: 0 } }}>
          <span>test</span>
        </Drawer>,
      );

      expect(getByTestId('content').getAttribute('tabIndex')).to.equal('0');
    });
  });
});
