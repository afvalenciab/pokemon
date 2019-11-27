import React from 'react';
import { create } from 'react-test-renderer';
import { shallow, configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

configure({ adapter: new Adapter() });

describe('Header Testing', () => {
  test('Match Snapshot', () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });

  test('Header has class .header', () => {
    const header = shallow(<Header />);
    const headerElm = header.find('.header');
    expect(headerElm.hasClass('header')).toBe(true);
  });

  test('Header has 1 figure tag', () => {
    const header = render(<Header />);
    expect(header.find('figure')).toHaveLength(1);
  });
});
