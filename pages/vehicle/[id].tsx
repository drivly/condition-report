import { BadgeCheckIcon } from "@heroicons/react/outline";
import axios from "axios";
import {
  ImageGallery, InspectionCard, ManexIcon, OffsiteNotes,
  SectionHeader, SectionTitle, TitleInfo, VehicleDetails
} from "components";
import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from "next";
import { Vehicle } from "typings";
import baseUrl from "utils/baseUrl";

interface Props {
  vehicle: Vehicle;
}

const VehiclePage = ({ vehicle }: Props) => {
  const { grade, vehicleDetails } = vehicle;

  return (
    <main className="pt-12 max-w-4xl mx-auto relative mb-12 pb-6">
      {vehicle.metaData && <ManexIcon vehicle={vehicle} />}
      <section className="sm:flex sm:space-x-8 justify-between border-b pb-8 border-gray-6 relative">
        <SectionTitle
          heading="Condition Report"
          title={
            <>
              {vehicleDetails.year} {vehicleDetails.make} <br />
              {vehicleDetails.model} {vehicleDetails.trim}
            </>
          }
          Icon={BadgeCheckIcon}
          grade={grade}
        />
        <VehicleDetails vehicle={vehicle} />
        <TitleInfo vehicle={vehicle} />
      </section>
      <div className="flex flex-row justify-evenly mt-10 mb-8 gap-x-4">
        <OffsiteNotes notes={vehicle.offsiteAnnouncements} />
        <OffsiteNotes remarks={vehicle.offsiteRemarks} />
      </div>
      <ImageGallery vehicle={vehicle} />
      <SectionHeader vehicle={vehicle} />
      <InspectionCard vehicle={vehicle} />
    </main>
  );
};

export default VehiclePage;


export const getServerSideProps = async ({params}: GetServerSidePropsContext) => {
  console.log(params)
  const vehicle = await axios
    .get(`${baseUrl}/api/vehicles/${params?.id}`)
    .then((res) => res.data);

 console.log(vehicle)

  return {
    props: { vehicle  }
  };
};
