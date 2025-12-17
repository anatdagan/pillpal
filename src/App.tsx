import "./App.css";
import { HomeIcons } from "./components/HomeIcons";

function App() {
  return (
    <div className="app">
      <main className="app-main">
        <section className="card">
          {/* <header className="app-header"></header> */}
          <p>בחרו פעולה כדי להתחיל:</p>
          <HomeIcons />
        </section>
      </main>
    </div>
  );
}

export default App;
