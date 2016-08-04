import reducer from './reducer'
import {expect} from 'chai'
import {mount} from 'enzyme'
import Header from './todos/components/Header'
import React from 'react'

console.log(reducer.login)
describe('test', function() {
  it('should pass', function() {
    expect(typeof reducer).to.be.equal('function')
  })

  it('route', function() {
    mount(<Header isLoading={true} onAddTodo={()=>{}}/>)
      .find('a').simulate('click')
  })
})
