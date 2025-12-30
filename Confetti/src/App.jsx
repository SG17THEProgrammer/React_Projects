
import confetti from 'canvas-confetti'
const App = () => {

  const scalar = 2;
const pineapple = confetti.shapeFromText({ text: '❤️', scalar });



  const shower = () => {
    confetti({
      particleCount: 200,
      spread: 160,
      origin: {
        x: 0.5, // Center
        y: 0    // Top edge
      },
      shapes: [pineapple],
  scalar ,
   ticks:300,
   startVelocity: 60, // Higher initial speed (default is 45)
    gravity: 1.5,      // Increased gravity for a faster fall (default is 1)
      // any other options from the global
      // confetti function
    });

  }

  const  duration = 3 * 1000;
const  end = Date.now() + duration;

  const fancy =()=>{

(function frame() {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 7,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 7,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });

  // keep going until we are out of time
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
  }
  return (
    <>

    <button onClick={shower}>Shower</button>
    <button onClick={fancy}>Fancy</button>
    </>
  )
}

export default App