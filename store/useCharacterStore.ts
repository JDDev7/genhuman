import { create } from 'zustand';

// Definimos el tipo para una parte del personaje
type CharacterPart = {
  name: string;
  options: string[];
  currentIndex: number;
};

// Definimos el estado de nuestro store
type CharacterState = {
  parts: CharacterPart[];
  // Acciones
  nextOption: (partName: string) => void;
  prevOption: (partName: string) => void;
  randomize: () => void;
  reset: () => void; // Opcional: para resetear
};

// Estado inicial de las partes
const initialParts: CharacterPart[] = [
  {
    name: "torso",
    options: ["torso1.png", "torso2.png"],
    currentIndex: 0
  },
  {
    name: "cabesa",
    options: ["cabesa1.png", "cabesa2.png"],
    currentIndex: 0
  },
  {
    name: "ojos",
    options: ["ojos1.png", "ojos2.png"],
    currentIndex: 0
  },
  {
    name: "nariz",
    options: ["nariz1.png", "nariz2.png"],
    currentIndex: 0
  },
  {
    name: "boca",
    options: ["boca1.png", "boca2.png"],
    currentIndex: 0
  }
];

// Creamos el store con Zustand
export const useCharacterStore = create<CharacterState>((set) => ({
  parts: initialParts,
  
  // Acción: Avanzar a la siguiente opción de una parte
  nextOption: (partName) => {
    set((state) => ({
      parts: state.parts.map(part => {
        if (part.name === partName) {
          // Cálculo circular: si llega al final, vuelve al inicio
          const nextIndex = (part.currentIndex + 1) % part.options.length;
          return { ...part, currentIndex: nextIndex };
        }
        return part;
      })
    }));
  },
  
  // Acción: Retroceder a la opción anterior
  prevOption: (partName) => {
    set((state) => ({
      parts: state.parts.map(part => {
        if (part.name === partName) {
          // Cálculo circular: si está en 0, va al final
          const prevIndex = (part.currentIndex - 1 + part.options.length) % part.options.length;
          return { ...part, currentIndex: prevIndex };
        }
        return part;
      })
    }));
  },

  randomize: () => {
    set((state) => ({
      parts: state.parts.map(part => {
        // Genera un índice aleatorio para cada parte
        const randomIndex = Math.floor(Math.random() * part.options.length);
        return { ...part, currentIndex: randomIndex };
      })
    }));
  },
  
  // Acción opcional: Resetear todas las partes
  reset: () => {
    set({ parts: initialParts });
  }
}));