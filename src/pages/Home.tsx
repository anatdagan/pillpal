import "../App.css";
import { HomeIcons } from "../components/HomeIcons";

export function Home() {
  return (
    <div className="app">
      <main className="app-main">
        <section className="card">
          <p>בחרו פעולה כדי להתחיל:</p>
          <HomeIcons />
        </section>
      </main>
    </div>
  );
}
