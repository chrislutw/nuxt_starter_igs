import { shallowMount } from '@vue/test-utils'
import index from '~/pages/_lang/index'
import NuxtLink from '~/.nuxt/components/nuxt-link'

describe('index', () => {
  beforeAll(() => {
    index.components.NuxtLink = NuxtLink
  })

  test('mounts properly', () => {
    const wrapper = shallowMount(index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = shallowMount(index)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
