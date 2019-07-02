import React, { Component } from "react";
import Header from "./components/Header/Header";
import P5Wrapper from "./components/P5Wrapper";
import MachineSlider from './components/Machine/MachineSlider'
import TangoSlider from './components/Tango/TangoSlider'
import PolySlider from './components/Poly/PolySlider'
import PluckySlider from './components/Plucky/PluckySlider'
import ArpeggiatorSlider from './components/Arpeggiator/ArpeggiatorSlider'
import AmSlider from './components/Am/AmSlider'
import { Grid, Segment } from 'semantic-ui-react'
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      p5Props: {
        status: "",
      }
    }
  }

  componentDidMount = async () => {
    document.title = 'drum drum'
  }

  render() {
    return (
      <div>
        <div className="header-container">
        </div>
        <h2 className="inst">Press Space to start the beat</h2>
        <h4 className="inst">You can click samples on and off for different patterns</h4>
        <Header />
        <P5Wrapper {...this.state.p5Props} />
        <h4 className="inst">Try some sounds out... you have to re-click the button to implement the effect slider</h4>

        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <MachineSlider
                />

              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <TangoSlider
                />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <PolySlider

                />
              </Segment>
            </Grid.Column>

          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <ArpeggiatorSlider

                />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <PluckySlider
                />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <AmSlider

                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment></Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    );
  }

}


