import React, { Component, Fragment } from 'react';
import {BuildDeck}from './BuilDeck.jsx';
import MemorizeBoard from './MemorizeBoard.jsx';
import '../style/MemorizeBoard.css';
import Counter from './Counter.jsx';
import Header from './Header';
import HeaderCel from '../components/HeaderCel';
import Footer from "./Footer"
import Boton from './Boton'

class MemorizeEntryPoint extends Component {
  state = {
    deck: BuildDeck(),
    selectedPair: [],
    isComparing: false,
    triesNumber: 0,
    winnerMessage: ''
  };

  resetGame = () => {
    this.setState({
      deck: BuildDeck(),
      selectedPair: [],
      isComparing: false,
      triesNumber: 0
    });
  }
  checkForWinner = (deck) => {
    if (deck.filter(card => !card.wasMatched).length === 0) {
     /*  alert(`Ganaste en ${this.state.triesNumber} intentos`); */
     this.setState({
       winnerMessage: `Ganaste en ${this.state.triesNumber} intentos.`,
       winner: true
     })
     setTimeout(() => {
       this.wonStars(this.state.triesNumber);
     }, 1000)
    }
  }

  wonStars = (tries) => {
    let prize = null;
    switch (true) {
      case (tries === 5):
        prize = "Premio: 5 estrellas + 2 estrellas por completar el juego en el mínimo de intentos";
         this.setState({
           prize,
         });
        break;
      case (tries > 5 || tries <= 8):
        prize = "Premio: 5 estrellas";
         this.setState({
           prize,
         });
        break;
      case (tries > 8 || tries <= 10):
        prize = "Premio: 3 estrellas";
         this.setState({
           prize,
         });
        break;
      case (tries > 10 || tries >= 15):
        prize = "Premio: 2 estrellas";
         this.setState({
           prize,
         });
        break;
      default:
        prize = "Premio: 1 estrella";
         this.setState({
           prize,
         });
    }
   
  }

  comparePair = (pair) => {
    this.setState({
      isComparing: true
    });
    setTimeout(() => {
      const [cardOne, cardTwo] = pair;
      let deck = this.state.deck;

      if (cardOne.img === cardTwo.img) {
        deck = deck.map((card) => {
          if (card.img !== cardOne.img) {
            return card;
          }

          return {...card, wasMatched: true};
        })
      } else {
        this.setState({
          triesNumber: this.state.triesNumber + 1
        })
      }
      this.checkForWinner(deck);
      
      this.setState({
        selectedPair: [],
        deck,
        isComparing: false
      })
      
    }, 1000)
  }

  selectCard = (card) => {
    if (
      this.state.isComparing ||
      this.state.selectedPair.indexOf(card) > -1 ||
      card.matched
    ) {
      return;
    }
    const selectedPair = [...this.state.selectedPair, card];
    this.setState({
      selectedPair,
    });

    if (selectedPair.length === 2) {
      this.comparePair(selectedPair);
    }
  };

  render() {
    return (
      <Fragment>
        <div className="d-none d-sm-block"><Header /></div>
        <div className="d-lg-none d-sm-block"><HeaderCel /></div>
        <div className="d-none d-sm-block"><Boton/></div>
      <div className="board">
        <Counter
          triesNumber={this.state.triesNumber}
          resetGame={() => this.resetGame()}
        />
        <button className="memorize-reset-btn" onClick={this.resetGame}>Reinicar juego</button>
        <p>{this.state.winnerMessage}</p>
        <p>{this.state.prize}</p>

        <MemorizeBoard
          deck={this.state.deck}
          selectedPair={this.state.selectedPair}
          selectCard={(card) => this.selectCard(card)}
          triesNumber={this.state.triesNumber}
        />
      </div>
      <Footer/>
      </Fragment>
    );
  }
}

export default MemorizeEntryPoint;