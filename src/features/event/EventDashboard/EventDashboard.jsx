import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getEventsForDashbaord } from '../eventActions';
import EventList from '../EventList/EventList';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';

const mapState = state => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  getEventsForDashbaord
};

class EventDashboard extends Component {
  state = {
    moreEvents: false,
    loadingInitial: true,
    loadedEvents: []
  }

  async componentDidMount() {
    let next = await this.props.getEventsForDashbaord();
    console.log(next);

    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreEvents: true,
        loadingInitial: false
      })
    }
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.events !== nextProps.events) {
      this.setState({
        loadedEvents: [...this.state.loadedEvents, ...nextProps.events]
      })
    }
  }


  getNextEvents = async () => {
    const { events } = this.props;
    let lastEvents = events && events[events.length - 1];
    console.log(lastEvents);
    let next = await this.props.getEventsForDashbaord(lastEvents);
    console.log(next);
    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreEvents: false
      })
    }
  }

  render() {
    const { loading } = this.props;
    const { moreEvents, loadedEvents } = this.state;
    if (this.state.loadingInitial) return <LoadingComponent inverted={true} />;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList loading={loading} moreEvents={moreEvents} events={loadedEvents} getNextEvents={this.getNextEvents} />

        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
        <Grid.Column width={10}>
          <Loader active={loading} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  firestoreConnect([{ collection: 'events' }])(EventDashboard)
);
