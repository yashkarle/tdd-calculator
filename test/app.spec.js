import { mount } from '@vue/test-utils';
import App from '../src/App.vue';

describe('App specs', () => {
    let wrapper, vm;

    beforeEach(() => {
        wrapper = mount(App);
        vm = wrapper.vm;
    });

    afterEach(() => {
        vm.$destroy();
        vm.$el.remove();
        wrapper = null;
    });

    it('should create a Vue instance on mount', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should have display and keyboard sections', () => {
        expect(wrapper.find('.display').exists()).toBeTruthy();
        expect(wrapper.find('.keyboard').exists()).toBeTruthy();
    });

    it('should have panel-a and panel-b', () => {
        expect(wrapper.find('.panel-a').exists()).toBeTruthy();
        expect(wrapper.find('.panel-b').exists()).toBeTruthy();
    });

    it('should have top-buttons and numbers inside panel-a', () => {
        expect(wrapper.find('.panel-a .top-buttons').exists()).toBeTruthy();
        expect(wrapper.find('.panel-a .numbers').exists()).toBeTruthy();
    });
});
