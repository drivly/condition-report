export interface Vehicle {
  grade: {
    description: string;
    value: number;
  };
  id: string;
  images: string[];
  inspectionSections: Section[];
  metaData: {
    manex2021: boolean;
  };
  offsiteAnnouncements: [];
  offsiteRemarks: [];
  titleInformation: {
    brandings: [];
    status: string;
    state?: string;
  };
  type: string;
  vehicleDetails: {
    driveTrain: string;
    engine: string;
    exteriorColor: string;
    interiorColor: string;
    make: string;
    model: string;
    odometer: number;
    sellerName: string;
    transmission: string;
    trim: string;
    vin: string;
    year: number;
  };
}

export type Section = {
  name: string;
  responses: Response[];
};

export type Response = {
  guid: string;
  question: {
    buyerTranslation: string;
    id: string;
    section: string;
  };
  answers: IAnswers[];
};

export type IAnswers = {
  answer: {
    connotation: number;
    value: string;
    noteLabel?: string;
  };
  notes?: string;
  value: string;
};
