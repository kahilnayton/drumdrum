import React, { Component } from 'react'
import { Input, Icon, Button } from 'semantic-ui-react'
import Machine from './Machine'

export default class MachineSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Machine',
      machineState: 1,
      bpm: 1
    }
  }


  handleInputChange = (e, { value }) => this.setState({ machineState: value })
  handleBpmChange = (e, { value }) => this.setState({ bpm: value })

  handlePaginationChange = (e, { machineState }) => this.setState({ machineState })
  handlePaginationChange = (e, { bpm }) => this.setState({ bpm })


  render() {
    const { machineState, bpm } = this.state

    return (
      <React.Fragment>
        <Machine
          machineState={this.state.machineState}
          bpm={this.state.bpm} />

        <div>Effect {machineState}</div>
        <Input
          min={0}
          max={255}
          onChange={this.handleInputChange}
          type='range'
          value={machineState}
          />
          <div>bpm {bpm}</div>
        <Input
          min={0}
          max={255}
          onChange={this.handleBpmChange}
          type='range'
          value={bpm}
        />
      </React.Fragment>
    )
  }
}
