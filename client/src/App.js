import React from 'react';
import './App.css';
import axios from 'axios';
import { Grid, Header, Card, } from 'semantic-ui-react';

class App extends React.Component {
  state = { categories: [], cards: [], question: null, };

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

  showQuestion = (c_question, c_points, cat) => {
    this.setState({ question: `${cat} for ${c_points} : ${c_question}`, });
  }

  render() {
    const { categories, cards, question,  } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>REACT JEOPARDY</h1>
        </header>
        <br />
        { question &&
          <>
            <div className="qna">
              {this.state.question}
              <br />
              <br />
              <input />
            </div>
            <br />
            <br />
          </>
        }
        <Grid className="grid" divided>
          { categories.map( c => 
            <Grid.Column key={c.id} width={4}>
              <Header as="h2">{c.name}</Header>
              { cards.map( card => {
                  if (c.id === card.category_id) 
                    return ( 
                      <Card 
                        key={`card_${card.id}`} 
                        className="card"
                        onClick={() => this.showQuestion(card.question, card.points, c.name)}
                      >
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
