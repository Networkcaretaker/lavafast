import './App.css'
import BubbleAnimation from './components/background';
import BubbleDonut from './components/logo';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Bubble animation as background */}
      <div className="fixed inset-0 z-0">
        <BubbleAnimation />
      </div>
      
      {/* Your main content */}
      <div className="relative z-10 p-6 flex flex-col items-center">
        <img src="/logo.png" className="object-contain mx-auto mb-4"></img>
        <BubbleDonut />
      </div>
    </div>
  );
}

export default App;