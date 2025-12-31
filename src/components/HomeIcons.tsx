import { Tooltip } from "./ui/Tooltip";
import { useNavigate } from "react-router-dom";

type HomeIcon = {
  label: string;
  emoji: string;
  description: string;
  href?: string;
};

const defaultIcons: HomeIcon[] = [
  { label: "התרופות שלי", emoji: "💊", description: "רשימת התרופות והמינונים שלך", href: "/medications" },
  { label: "תאריכים מיוחדים", emoji: "📅", description: " תוכל להכניס מועדים מיוחדים (כגון חופשה מתוכננת) על מנת שנעזור לך לתכנן את מלאי התרופות בצורה מיטבית", href: "/special-dates" },
  { label: "סריקת קוד", emoji: "📷", description: "סריקת ברקוד תרופה למידע נוסף", href: "/scan" },
  { label: "דיווח תופעת לוואי", emoji: "📝", description: "דיווח מהיר על תופעות לוואי", href: "/report" },
];

type HomeIconsProps = {
  icons?: HomeIcon[];
};

export function HomeIcons({ icons = defaultIcons }: HomeIconsProps) {
  const navigate = useNavigate();

  function handleIconClick(icon: HomeIcon) {
    if (icon.href) {
      navigate(icon.href);
    }
  }
  return (
    <nav className="home-icons" aria-label="פעולות עיקריות">
      {icons.map((icon) => (
        <Tooltip key={icon.label} content={icon.description} position="top">
          <button type="button" className="home-icon" onClick={() => handleIconClick(icon)}>
            <span className="home-icon-emoji" aria-hidden="true">
              {icon.emoji}
            </span>
            <span className="home-icon-label">{icon.label}</span>
          </button>
        </Tooltip>
      ))}
    </nav>
  );
}
