import "./ui.css";

interface CheckboxProps {
  id: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ id, label, onChange = () => {} }: CheckboxProps) {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id={id} className="checkbox" onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
