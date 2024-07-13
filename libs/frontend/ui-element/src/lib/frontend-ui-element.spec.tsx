import { render } from '@testing-library/react';

import FrontendUiElement from './frontend-ui-element';

describe('FrontendUiElement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendUiElement />);
    expect(baseElement).toBeTruthy();
  });
});
