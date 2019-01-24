import { shallowMount } from '@vue/test-utils'
import index from '~/pages/index'
import NuxtLink from '~/.nuxt/components/nuxt-link'
describe('index', () => {
  const factory = () =>
    shallowMount(index, {
      mocks: {
        localePath: () => {}
      }
    })
  beforeAll(() => {
    index.components.NuxtLink = NuxtLink
  })

  test('mounts properly', () => {
    const wrapper = factory()
    wrapper.vm.localePath = () => {}
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
