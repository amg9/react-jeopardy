import React from 'react';
import './App.css';
import axios from 'axios';
import { Table, } from 'semantic-ui-react';

class App extends React.Component {
  state = { categories: [], };

  componentDidMount() {
    axios.get('/api/categories')
      .then( res => {
        this.setState({ categories: res.data, })
      })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>REACT JEOPARDY</h1>
          <Table celled>
            <Table.Header>
              <Table.Row>
                { this.state.categories.map( c => 
                  <Table.HeaderCell key={c.id}>
                    {c.name}
                  </Table.HeaderCell>
                ) }
              </Table.Row>
            </Table.Header>
          </Table>
        </header>
      </div>
    );
  };
};

export default App;
