import React from 'react';
import './app.css';
import Login from 'app/module/login/login';
export class App extends React.Component<any, any> {

  componentDidMount() {}
  render() {
    return (
      <Login/>
    );
  }
}

export default App;
