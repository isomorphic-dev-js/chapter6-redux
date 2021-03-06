import React from 'react';

export default class HTML extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Chapter 6 - Redux</title>
          <link rel="stylesheet"
                href="https://cdn.jsdelivr.net/semantic-ui/2.2.2/semantic.min.css" />
        </head>
        <body>
          <div id="react-content"
               dangerouslySetInnerHTML={{__html: this.props.html}}/>
          <script dangerouslySetInnerHTML={{__html: this.props.data}}/>
          <script src="/browser.js"/>
        </body>
      </html>
    );
  }
}
