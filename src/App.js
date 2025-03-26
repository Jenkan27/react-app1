function Grid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

function Navbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightblue', width: '100%', height: '5vh' }}>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'red' }}>Homepage</button>
        </a>
        <a href="/second" style={{ textDecoration: 'none' }}>
          <button>Second Page</button>
        </a>
      </div>
    </div>
  );
}


function SpinningBox() {
  return (
    <div>
      <marquee style={{height: '3vh'}}>
        <p style={{padding: '0px', margin: '0px', opacity: '10%'}}>jensholm.com</p>
      </marquee>
    </div>
  );
}

export {App, Grid, Navbar, SpinningBox};