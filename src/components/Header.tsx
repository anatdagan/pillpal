function Header() {
  return (
    <header className="app-header">
      <div className="header-logo">
        <img src={logo} alt="PillPal לוגו" />
      </div>
      <button className="header-avatar" type="button" aria-label="פרופיל משתמש">
        <span className="header-avatar-initial">א</span>
      </button>
    </header>
  );
}
