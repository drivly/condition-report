import { BadgeCheckIcon } from "@heroicons/react/outline";
import axios from "axios";
import {
  ImageGallery,
  ManexIcon,
  OffsiteNotes,
  SectionTitle,
  TitleInfo,
  VehicleDetails,
} from "components";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import { Vehicle } from "typings";
import baseUrl from "utils/baseUrl";
import formatVehicleDetails from "utils/formatVehicleDetails";

interface Props {
  vehicle: Vehicle;
}

const VehiclePage = ({ vehicle }: Props) => {
  const { grade, inspectionSections, titleInformation, type, vehicleDetails } =
    vehicle;

  console.log(vehicle);

  return (
    <main className="pt-10 max-w-4xl mx-auto relative mb-12 pb-6">
      <ManexIcon vehicle={vehicle} />
      <section className="sm:flex sm:space-x-8 justify-between border-b pb-6 border-gray-6 relative">
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
      {/* offSiteRemarks & offSiteAnnouncements */}
      <div className="flex flex-row justify-evenly my-8 gap-x-4">
        <OffsiteNotes vehicle={vehicle} />
        <OffsiteNotes vehicle={vehicle} />
      </div>
      {/* images section */}
      <ImageGallery vehicle={vehicle} />
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
