import React from 'react';
import './App.css';
import axios from 'axios';
import { Grid, Header, Card, } from 'semantic-ui-react';

class App extends React.Component {
  state = { categories: [], cards: [], };

  componentDidMount() {
    axios.get('/api/categories')
      .then( res => {
        this.setState({ categories: res.data, })
      })
    
    axios.get('/api/cards')
      .then( res => {
        this.setState({ cards: res.data, })
      })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>REACT JEOPARDY</h1>
        </header>
        <br />
        <Grid className="grid" divided>
          { this.state.categories.map( c => 
            <Grid.Column key={c.id} width={4}>
              <Header as="h2">{c.name}</Header>
              { this.state.cards.map( card => {
                  if (c.id === card.category_id) 
                    return ( 
                      <Card key={`card_${card.id}`} className="card">
                        {card.points}
                      </Card>
                    )
                } )
              }
            </Grid.Column>
          ) }
        </Grid>
      </div>
    );
  };
};

export default App;
