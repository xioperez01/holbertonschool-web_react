/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders a <NotificationItem /> component', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toHaveLength(1);
	});

	it('renders a <NotificationItem /> component with type and value props', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.props()['data-notification-type']).toEqual('default');
		expect(wrapper.text()).toEqual('test');
		expect(wrapper.html()).toContain('<li data-notification-type="default"');
		expect(wrapper.html()).toContain('test</li>');
	});

	it('renders a <NotificationItem /> component with type and value props', () => {
		const wrapper = shallow(<NotificationItem  html={{ __html: '<u>test</u>' }}/>);
		expect(wrapper.html()).toContain('<u>test</u>');
	});

	it('verifies markAsRead is called with the right ID argument when clicked', () => {
		const listNotifications = [
      {id: 13, type: 'default', value: 'New course available'},
      {id: 22, type: 'urgent', value: 'New resume available'},
      {id: 53, type: 'urgent', value: 'Handle this now!!!'},
    ];
		const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
		const instance = wrapper.instance();
		const spy = jest.spyOn(instance, 'markAsRead');
		wrapper.find('li').first().simulate('click');
		expect(spy).toBeCalledWith(13);
		wrapper.find('li').at(1).simulate('click');
		expect(spy).toBeCalledWith(22);
		wrapper.find('li').last().simulate('click');
		expect(spy).toBeCalledWith(53);
	})
});
