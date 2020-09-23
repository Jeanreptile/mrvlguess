import React, { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import Choices from './components/Choices';
import { getCharacters } from './API/MarvelApi';

function App() {
  const [characterToGuess, setCharacterToGuess] = useState<{key: string, imgUrl: string}|undefined>(undefined);

  const [characters, setCharacters] = useState<{[key: string]: string}>();
  const [choiceState, setChoiceState] = useState<string>();
  const [didFind, setDidFind] = useState<boolean>();

  useEffect(() => {
    setCharacters(getCharacters());
  }, [])

  var randomKey = function(obj: any): string {
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
  }

  useEffect(() => {
    if (characters){
      const rndmKey = randomKey(characters);
      setCharacterToGuess({
        key: rndmKey,
        imgUrl: characters[rndmKey]
      });
    }
  }, [characters])

  const handleChoice = function(key: string) {
    if (characterToGuess?.key === key) {
      setDidFind(true);
    }
    else {
      setDidFind(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Guess the Marvel character
        </div>
        {didFind === true && <div className="win"> Congratulations, you found the good character!</div>}
        {didFind === false && <div className="lost"> Nope, that's not the right character</div>}
      </header>
      {characterToGuess && <ImageCard imgUrl={characterToGuess.imgUrl} />}
      {characters && <Choices choices={characters} onSelectChoice={handleChoice} choiceState={choiceState ?? ""}/>}
    </div>
  );
}

export default App;
