export interface Vehicle {
  grade: {
    description: string;
    value: number;
  };
  id: string;
  images: string[];
  inspectionSections: {}[];
  metaData: {
    manex2021: boolean;
  };
  offsiteAnnouncements: [];
  offsiteRemarks: [];
  titleInformation: {
    brandings: [];
    status: string;
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
