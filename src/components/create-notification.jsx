import React from 'react';

export default class CreateNotification extends React.Component {

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.messageTypeChange = this.messageTypeChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
    this.serviceChange = this.serviceChange.bind(this);

    this.state = {
      messageType: "error",
      serviceId: 1,
      message: "Enter Message"
    }
  }

  addItem() {
    this.props.notificationActions.createNotification(this.state);
  }

  messageTypeChange(event) {
    this.setState({
      messageType: event.target.value
    })
  }

  messageChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  serviceChange(event) {
    this.setState({
      serviceId: event.target.value
    })
  }

  render() {
    return (
        <div className="featured ui container four wide column form">
          <h3 className="ui header">Send a notification</h3>
          <div className="field eight wide column">
            <label>Notification message:</label>
            <input type='text' value={this.state.message} onChange={this.messageChange}/>
          </div>
          <div className="field eight wide column">
            <label>Message Level</label>
            <select className="tab-select" onChange={this.messageTypeChange}
                    value={this.state.messageType} >
                    <option key="error" value={"error"}>Error</option>
                    <option key="warning" value={"warning"}>Warning</option>
                    <option key="success" value={"success"}>Success</option>
            </select>
          </div>
          <div className="field eight wide column">
            <label>Notifier Source</label>
            <select className="tab-select field" onChange={this.serviceChange}
                    value={this.state.service} >
                    <option key="1" value={1}>Service 1: Github</option>
                    <option key="2" value={2}>Service 2: Travis CI</option>
                    <option key="3" value={3}>Service 3: Healthcheck</option>
            </select>
          </div>
          <button className="ui button" onClick={this.addItem}>Send Notification</button>
        </div>
    );
  }
}
