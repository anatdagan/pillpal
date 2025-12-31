export function MedicationList({medications}: {medications: string[]}) {
    return (
        <div>
            <h2>רשימת תרופות</h2>
            {medications.map((medication) => (
                <p key={medication}>{medication}</p>
            ))}
        </div>
    );
}