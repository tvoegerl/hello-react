// import logo from './logo.svg';
import './App.css';
import puppy from './puppy.jfif';

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false }
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
    );
    return (
      <div>
        <h3>Magazines</h3>
        <ul>{listZines}</ul>
      </div>
    );
}

const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway', 
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
  width: '264',
  height: '378'
};

function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {book.image &&
      <img
        className='bookCover'
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
        />
      }
    </div>
  );
}


function MagicButton() {
  return (
    <div>
      <h5>This is a magic button</h5>
      <button>Magic</button>
    </div>
  );
}

function CutePuppy() {
  return (
    <div class="CutePup">
      <p>Destress with a puppy pic!</p>
      <img src={puppy} alt="adorable puppy"/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bookshelf/>
        <ZineRack/>
        <CutePuppy/>
        <MagicButton/>
      </header>
      
    </div>
  );
}

export default App;
