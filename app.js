console.log('yurrrrski')

const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      do{ 
        this.prevGuesses.push(this.getGuess())
        this.render()
      }while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
  },
  getGuess:function(){
    let guess;
    while(isNaN(guess)  || guess < this.smallestNum || guess > this.biggestNum) {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
    }
    return guess
        
  },

  render: function(){





    if(this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!!`)
    } else {
      if(this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ){
        alert(`Wrong Number! your guesss is to high! Previous guesses: ${this.prevGuesses.join(", ")}`)
      } else {
        alert(`Wrong Number! your guesss is to Low! ${this.prevGuesses.join(", ")}`)
      }    
    } 
  }
    
    
    
    
  }

game.play()


//If guess is > than secret number "your guesss is to high"
//If guess is < than secret number "your guesss is to low"



//(guess() > smallestNum && guess.parseInt() < biggestNum)