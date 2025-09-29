export interface Animal {
  id: string;
  name: string;
  type: 'dog' | 'cat';
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
  type?: 'dog' | 'cat';
  breed?: string;
  age?: number;
  gender?: 'male' | 'female';
  size?: 'small' | 'medium' | 'large';
  location?: string;
}