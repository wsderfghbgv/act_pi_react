export interface Animal {
    id: string;
    name: string;
    breed: string;
    age: number;
    gender: 'male' | 'female';
    size: 'small' | 'medium' | 'large';
    color: string;
    description: string;
    image: string;
    isAdopted: boolean;
    location: string;
    temperament: string[];
    healthInfo: {
      vaccinated: boolean;
      sterilized: boolean;
      microchipped: boolean;
    };
    adoptionFee?: number;
    createdAt: Date;
  }
  
  export interface AnimalFilters {
    breed?: string;
    age?: number;
    gender?: 'male' | 'female';
    size?: 'small' | 'medium' | 'large';
    location?: string;
  }