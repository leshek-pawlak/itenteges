import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Renders a "& Teges"', () => {
    const andTeges = _component.find('h1')
    expect(andTeges).to.exist
    expect(andTeges.text()).to.match(/& Teges/)
  })
})
