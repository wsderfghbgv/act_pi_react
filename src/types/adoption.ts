export interface AdoptionForm {
    animalId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    experience: 'none' | 'some' | 'experienced';
    hasOtherPets: boolean;
    otherPetsDescription?: string;
    hasChildren: boolean;
    childrenAges?: string;
    workSchedule: string;
    reasonForAdoption: string;
    agreeToTerms: boolean;
  }
  
  export interface AdoptionRequest {
    id: string;
    form: AdoptionForm;
    status: 'pending' | 'approved' | 'rejected' | 'completed';
    submittedAt: Date;
    reviewedAt?: Date;
    notes?: string;
  }