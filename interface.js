$( document ).ready(function() {
  console.log( "ready!" );

  let game = new Game(new FrameFactory(Frame, Roll));

  $('#score-input').submit(function(event) {
    event.preventDefault();
    let score = $('#current-score').val();
    $('#current-score').val('');
    console.log(score);
    game.getCurrentFrame().setCurrentRollScore(score);
    //$(`#frame-${game.currentFrameIndex}-roll-${game.getCurrentFrame().currentRollIndex}`).text(game.getCurrentRoll().getScore());
    game.update();
    var i;
    for(i = 0; i < game.frames.length; i++) {
      //game.frames[i].totalScore() // => assign to total
      //let frameScores = games.frames[i].rollScore() // => this will return the formatting
      //$ assign framesScore.firstRoll to roll 1
      //$ assign framesScore.secondRoll to roll 2
    }
    //game.render();
  });
});