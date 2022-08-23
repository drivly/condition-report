import { Vehicle } from "typings";
import { SectionTitle, AutoGrade, TitleInfo, ManexIcon } from ".";

interface Props {
  vehicle: Vehicle;
  sectionStyle?: string
}

const VehicleTitle = ({ vehicle, sectionStyle }: Props) => {
  const { vehicleDetails } = vehicle;

  return (
    <section className={`${sectionStyle} pb-6 border-b-4 border-gray-6/20 relative`}>
      <SectionTitle
        heading="Condition Report"
        title={
          <span className="whitespace-pre-wrap">
            {vehicleDetails.year} {vehicleDetails.make}
            <br />
            {vehicleDetails.model} {vehicleDetails.trim}
          </span>
        }
        grade={<AutoGrade vehicle={vehicle} />}
      />

      <TitleInfo vehicle={vehicle} />
      {vehicle.metaData && <ManexIcon vehicle={vehicle} />}
    </section>
  );
};

export default VehicleTitle;
