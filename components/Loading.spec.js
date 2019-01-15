import { shallowMount } from '@vue/test-utils'
import Loading from '~/components/Loading'
import NuxtLink from '~/.nuxt/components/nuxt-link'

describe('index', () => {
  beforeAll(() => {
    // index.components.NuxtLink = NuxtLink
  })

  test('mounts properly', () => {
    const wrapper = shallowMount(Loading)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = shallowMount(Loading)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('calls handleClick on click', () => {
    const wrapper = shallowMount(Loading)
    const handleClickMock = jest.fn()
    wrapper.vm.loading = true
    wrapper.setMethods({
      start: handleClickMock
    })
    wrapper.vm.start()
    expect(handleClickMock).toHaveBeenCalled()
  })
})
