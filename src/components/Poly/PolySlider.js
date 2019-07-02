import React, { Component } from 'react'
import { Button, Input, Segment, Icon } from 'semantic-ui-react'
import PolyMachine from './PolyMachine'

export default class PolySlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Poly',
      polyState: 1,
      userID: '',
      loggedIn: true,
      userInfo: 'userInfo'
    }
  }


  handleInputChange = (e, { value }) => this.setState({ polyState: value })

  handlePaginationChange = (e, { polyState }) => this.setState({ polyState })

  addSound = async () => {
    console.log('new poly', this.props.user)
    const newSound = {
      name: this.state.name,
      setting: Number.parseInt(this.state.polyState),
    }
  }

  render() {
    const { polyState } = this.state

    return (
      <React.Fragment>



        <PolyMachine
          polyState={this.state.polyState} />
        <div>Effect {polyState}</div>
        <Input
          min={0}
          max={255}
          onChange={this.handleInputChange}
          type='range'
          value={polyState}
        />
      </React.Fragment>
    )
  }
}
