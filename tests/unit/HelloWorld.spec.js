import HelloWorld from '@/components/HelloWorld.vue';
import Vuetify from 'vuetify';
import {createLocalVue, mount, shallowMount} from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('HelloWorld.vue', () => {
  let vuetify = null;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('should pass with mount', () => {
    const wrapper = mount(HelloWorld, {localVue, vuetify});
    expect(wrapper.vm).toBeTruthy();
  });

  it('should pass with shallowMount', () => {
    const wrapper = shallowMount(HelloWorld, {localVue, vuetify});
    expect(wrapper.vm).toBeTruthy();
  });
});
