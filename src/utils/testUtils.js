/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { shallow } from 'enzyme'

export const shallowRender = (componentClosure) => {
  const consoleError = console.error
  console.error = jest.fn()
  const wrapper = shallow(componentClosure())
  if (console.error.mock.calls.length > 0) {
    throw new Error('JS error(s) while rendering. Check PropTypes validation.')
  }
  console.error = consoleError
  return wrapper
}
