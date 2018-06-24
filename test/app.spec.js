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
});
