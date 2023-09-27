import * as React from 'react';
import { expect } from 'chai';
import {
  createRenderer,
  describeConformance,
  describeJoyColorInversion,
} from '@mui-internal/test-utils';
import { unstable_capitalize as capitalize } from '@mui/utils';
import { PopperProps } from '@mui/base';
import { ThemeProvider } from '@mui/joy/styles';
import Tooltip, { tooltipClasses as classes, TooltipClassKey } from '@mui/joy/Tooltip';

describe('<Tooltip />', () => {
  const { render } = createRenderer();

  function TestPopper(
    props: Omit<PopperProps, 'children'> & { 'data-testid': string; children: any },
  ) {
    const { children, className, 'data-testid': testId } = props;
    return (
      <div className={className} data-testid={testId ?? 'custom'}>
        {typeof children === 'function' ? children({}) : children}
      </div>
    );
  }

  describeConformance(
    <Tooltip title="Hello World" open arrow>
      <button type="submit">Hello World</button>
    </Tooltip>,
    () => ({
      classes,
      inheritComponent: 'button',
      render,
      ThemeProvider,
      muiName: 'JoyTooltip',
      refInstanceof: window.HTMLButtonElement,
      testComponentPropWith: 'span',
      testRootOverrides: { slotName: 'root', slotClassName: classes.root },
      testVariantProps: { variant: 'solid' },
      testCustomVariant: true,
      slots: {
        root: {
          expectedClassName: classes.root,
          testWithComponent: TestPopper as React.ComponentType,
          testWithElement: null,
        },
        arrow: { expectedClassName: classes.arrow },
      },
      skip: [
        'rootClass',
        'componentProp',
        'componentsProp',
        'themeVariants',
        // react-transition-group issue
        'reactTestRenderer',
      ],
    }),
  );

  describeJoyColorInversion(
    <Tooltip
      title="Hello world"
      open
      disablePortal
      slotProps={{ root: { 'data-testid': 'test-element' } as any }}
    >
      <button>Hello World</button>
    </Tooltip>,
    { muiName: 'JoyTooltip', classes, portalSlot: 'root' },
  );

  describe('prop: variant', () => {
    it('solid by default', () => {
      const { getByRole } = render(
        <Tooltip title="Add" open>
          <button>button</button>
        </Tooltip>,
      );
      expect(getByRole('tooltip')).to.have.class(classes.variantSolid);
    });

    (['outlined', 'soft', 'plain', 'solid'] as const).forEach((variant) => {
      it(`should render ${variant}`, () => {
        const { getByRole } = render(
          <Tooltip title="Add" variant={variant} open>
            <button>button</button>
          </Tooltip>,
        );
        expect(getByRole('tooltip')).to.have.class(
          classes[`variant${capitalize(variant)}` as TooltipClassKey],
        );
      });
    });
  });

  describe('prop: color', () => {
    it('adds a neutral class by default', () => {
      const { getByRole } = render(
        <Tooltip title="Add" open>
          <button>button</button>
        </Tooltip>,
      );

      expect(getByRole('tooltip')).to.have.class(classes.colorNeutral);
    });

    (['primary', 'success', 'danger', 'neutral', 'warning'] as const).forEach((color) => {
      it(`should render ${color}`, () => {
        const { getByRole } = render(
          <Tooltip title="Add" color={color} open>
            <button>button</button>
          </Tooltip>,
        );

        expect(getByRole('tooltip')).to.have.class(
          classes[`color${capitalize(color)}` as TooltipClassKey],
        );
      });
    });
  });

  describe('prop: size', () => {
    it('md by default', () => {
      const { getByRole } = render(
        <Tooltip title="Add" open>
          <button>button</button>
        </Tooltip>,
      );

      expect(getByRole('tooltip')).to.have.class(classes.sizeMd);
    });

    (['sm', 'md', 'lg'] as const).forEach((size) => {
      it(`should render ${size}`, () => {
        const { getByRole } = render(
          <Tooltip title="Add" size={size} open>
            <button>button</button>
          </Tooltip>,
        );

        expect(getByRole('tooltip')).to.have.class(
          classes[`size${capitalize(size)}` as TooltipClassKey],
        );
      });
    });
  });
});
