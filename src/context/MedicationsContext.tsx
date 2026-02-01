import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export enum AlertSound {
  ANNOYING = "צליל מעצבן",
  SUPER_ANNOYING = "צליל ממש מעצבן",
}
export interface Medication {
  id: string;
  name: string;
  purchaseDate?: Date;
  dosage?: string;
  quantity?: number;
  expirationDate?: Date;
  isFixedTerm?: boolean;
  treatmentDaysCount?: number;
  dailyDoses?: number;
  schedules: TimeRanges;
  isAlert?: boolean;
  alertSound?: AlertSound;
  instructions?: string;
}

interface MedicationsContextType {
  medications: Medication[];
  addMedication: (medication: Omit<Medication, "id">) => void;
  removeMedication: (id: string) => void;
  updateMedication: (id: string, medication: Partial<Medication>) => void;
  getMedication: (id: string) => Medication | undefined;
}

const MedicationsContext = createContext<MedicationsContextType | undefined>(
  undefined
);

const STORAGE_KEY = "pillpal_medications";

export function MedicationsProvider({ children }: { children: ReactNode }) {
  const [medications, setMedications] = useState<Medication[]>(() => {
    // Load from localStorage on initialization
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.warn("Failed to load medications from localStorage:", error);
    }
    return [];
  });

  // Save to localStorage whenever medications change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(medications));
    } catch (error) {
      console.warn("Failed to save medications to localStorage:", error);
    }
  }, [medications]);

  const addMedication = (medication: Omit<Medication, "id">) => {
    if (medications.find((med) => med.name === medication.name)) {
      return;
    }
    const newMedication: Medication = {
      ...medication,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    };
    setMedications((prev) => [...prev, newMedication]);
  };

  const removeMedication = (id: string) => {
    setMedications((prev) => prev.filter((med) => med.id !== id));
  };

  const updateMedication = (id: string, updates: Partial<Medication>) => {
    setMedications((prev) =>
      prev.map((med) => (med.id === id ? { ...med, ...updates } : med))
    );
  };

  const getMedication = (id: string) => {
    return medications.find((med) => med.id === id);
  };

  const value = {
    medications,
    addMedication,
    removeMedication,
    updateMedication,
    getMedication,
  };

  return (
    <MedicationsContext.Provider value={value}>
      {children}
    </MedicationsContext.Provider>
  );
}

export function useMedications() {
  const context = useContext(MedicationsContext);
  if (context === undefined) {
    throw new Error("useMedications must be used within a MedicationsProvider");
  }
  return context;
}
