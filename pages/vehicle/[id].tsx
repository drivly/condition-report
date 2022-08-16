import { Disclosure } from "@headlessui/react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import { ChevronUpIcon } from "@heroicons/react/solid";
import axios from "axios";
import {
  ManexIcon,
  OffsiteNotes,
  SectionTitle,
  VehicleDetails,
} from "components";
import { GetStaticProps } from "next";
import { Vehicle } from "typings";
import baseUrl from "utils/baseUrl";

interface Props {
  vehicle: Vehicle;
}

const VehiclePage = ({ vehicle }: Props) => {
  const {
    grade,
    images,
    inspectionSections,
    metaData,
    offsiteAnnouncements,
    offsiteRemarks,
    titleInformation,
    type,
    vehicleDetails,
  } = vehicle;

  console.log(vehicle);

  return (
    <main className="pt-10 max-w-4xl mx-auto relative">
      <ManexIcon metaData={metaData} />
      <section className="sm:flex sm:space-x-8 justify-between">
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
        <VehicleDetails vehicleDetails={vehicleDetails} />
      </section>
      {/* offSiteRemarks & offSiteAnnouncements */}
      <div className="flex flex-row justify-between my-5 gap-x-8">
        <OffsiteNotes notes={offsiteAnnouncements} />
        <OffsiteNotes remarks={offsiteRemarks} />
      </div>
    </main>
  );
};

export default VehiclePage;

export const getStaticPaths = async () => {
  const vehicles = await axios
    .get(`${baseUrl}/api/vehicles`)
    .then((res) => res.data);

  const paths = vehicles.map((vehicle: Vehicle) => ({
    params: {
      id: vehicle.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const vehicle = await axios
    .get(`${baseUrl}/api/vehicles/${params?.id}`)
    .then((res) => res.data);

  if (!vehicle) {
    return {
      notFound: true,
    };
  }

  return {
    props: { vehicle },
    revalidate: 60,
  };
};
