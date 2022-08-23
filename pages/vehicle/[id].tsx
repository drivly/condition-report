import {
  Announcements,
  ImageGallery,
  InspectionCard,
  SectionHeader,
  VehicleDetails,
  VehicleTitle,
} from "components";
import { getVehicleById } from "lib/getVehicleById";
import { getVehicles } from "lib/getVehicles";
import { GetStaticProps } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import { Vehicle } from "typings";

interface Props {
  vehicle: Vehicle;
}

const VehiclePage = ({ vehicle }: Props) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Condition Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Vehicle Banner */}

      <main className="mx-auto max-w-5xl grid grid-cols-1 md:gap-10 md:grid-cols-12 py-12 mb-8">
        {/* Main Feed */}
        <section className="col-span-1 md:col-span-7">
          {/* Left Side*/}
          {/* <VehicleTitle vehicle={vehicle} sectionStyle="mb-8" /> */}
          <ImageGallery vehicle={vehicle} sectionStyle="mb-16" />
          {/* Show on Mobile up to md */}
          <VehicleDetails vehicle={vehicle} sectionStyle="md:hidden mb-16" />
          {/* Need to Gather damages and display for each section */}
          <SectionHeader vehicle={vehicle} sectionStyle="mb-8" />
          <InspectionCard vehicle={vehicle} />
        </section>
        {/* Vehicle Details & Annnouncements */}
        <div className="col-span-1 md:col-span-5">
          <div className="md:sticky md:top-[137px] md:mb-4 space-y-16">
            <VehicleTitle vehicle={vehicle} sectionStyle="mb-8" />
            <VehicleDetails vehicle={vehicle} sectionStyle="hidden md:flex" />
            <Announcements vehicle={vehicle} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default VehiclePage;

export const getStaticPaths = async () => {
  const vehicles = await getVehicles();

  const paths = vehicles.map((vehicle: any | Vehicle) => ({
    params: {
      id: vehicle.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const vehicle = await getVehicleById(params?.id);

  console.log(vehicle);

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