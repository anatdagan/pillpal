type HomeIcon = {
  label: string;
  emoji: string;
};

const defaultIcons: HomeIcon[] = [
  { label: "התרופות שלי", emoji: "💊" },
  { label: "תאריכים מיוחדים", emoji: "📅" },
  { label: "סריקת קוד", emoji: "📷" },
  { label: "דיווח תופעת לוואי", emoji: "📝" },
];

type HomeIconsProps = {
  icons?: HomeIcon[];
};

export function HomeIcons({ icons = defaultIcons }: HomeIconsProps) {
  return (
    <nav className="home-icons" aria-label="פעולות עיקריות">
      {icons.map((icon) => (
        <button key={icon.label} type="button" className="home-icon">
          <span className="home-icon-emoji" aria-hidden="true">
            {icon.emoji}
          </span>
          <span className="home-icon-label">{icon.label}</span>
        </button>
      ))}
    </nav>
  );
}
