import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateNotification from './create-notification';
import Settings from './settings';
import * as actionCreators from '../action-creators';
import * as settingActionCreators from '../settings-action-creators';
import classnames from 'classnames';

const pollInterval = 5000;
let intervalId;

class App extends React.Component {

  componentDidMount() {
    intervalId = setInterval(() => {
      this.props.notificationActions.fetchNotifications();
    }, this.props.refresh * 1000);
  }

  dismiss(index) {
    this.props.notificationActions.clearNotification(index)
  }

  getSystemNotifications(id) {
    let items = [];
    if (this.props.notifications) {
      this.props.notifications.forEach((item, index)=>{
        if (item.serviceId == id) {
          let classes = classnames("ui", "message", item.messageType);
          items.push(
            <div className={classes} key={index}>
              <i className="close icon" onClick={this.dismiss.bind(this, index)}></i>
              <p>
                {item.message}
              </p>
            </div>
          )
        }
      })
    }
    return items;
  }

  componentWillReceiveProps(nextProps) {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      this.props.notificationActions.fetchNotifications();
    }, nextProps.refresh * 1000);
  }

  render() {
      return (
          <div className="main ui container">
            <div className="ui grid">
              <div className="ui segment four wide column">
                <h3 className="ui header">System 1: Github</h3>
                {this.getSystemNotifications(1)}
              </div>
              <div className="ui segment four wide column">
                <h3 className="ui header">System 2: Build Tool</h3>
                  {this.getSystemNotifications(2)}
              </div>
              <div className="ui segment four wide column">
                <h3 className="ui header">System 3: Healthcheck</h3>
                {this.getSystemNotifications(3)}
              </div>
            </div>
            <CreateNotification {...this.props}></CreateNotification>
            <Settings {...this.props}></Settings>
          </div>
      );
  }
}

function mapStateToProps(state) {
  let { notifications } = state.notifications;
  let { refresh } = state.settings;
  return {
    notifications,
    refresh
  }
}

function mapDispatchToProps(dispatch) {
  return {
    notificationActions: bindActionCreators(actionCreators, dispatch),
    settingsActions: bindActionCreators(settingActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
