// App.js
import './App.css';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="bg-[#18181B] flex flex-col min-h-screen"> {/* Centering the content */}
      <header className="flex justify-center items-center p-5">
        <Navbar />
      </header>
    </div>
  );
}

export default App;