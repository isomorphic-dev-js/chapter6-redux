import React from 'react';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.refreshDelayChange = this.refreshDelayChange.bind(this);
  }

  refreshDelayChange(event) {
    this.props.settingsActions.updateRefreshDelay(event.target.value);
  }

  render() {
    return (
        <div className="featured ui form container four wide column">
          <h3>Settings</h3>
          <label>Update Refresh Rate</label>
          <select className="tab-select field" onChange={this.refreshDelayChange}
                defaultValue={this.props.refresh} >
                <option key="5" value={5}>5</option>
                <option key="15" value={15}>15</option>
                <option key="30" value={30}>30</option>
                <option key="60" value={60}>60</option>
          </select>
        </div>
    );
  }
}
