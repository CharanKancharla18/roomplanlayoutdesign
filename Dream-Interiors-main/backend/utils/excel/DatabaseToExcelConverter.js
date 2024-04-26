import React from 'react';
import DatabaseToExcelConverter from './DatabaseToExcelConverter';

class App extends React.Component {
  // Your app logic here

  render() {
    return (
      <div>
        <h1>My Database to Excel Converter</h1>
        <DatabaseToExcelConverter />
        {/* Other components and content of your app */}
      </div>
    );
  }
}

export default App;
