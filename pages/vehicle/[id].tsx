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

      <main className="mx-auto max-w-5xl grid grid-cols-1 md:gap-8 md:grid-cols-12 py-12 mb-8">
        <section className="col-span-1 md:col-span-7">
        <div className="md:sticky md:top-[121px] space-y-16">
          {/* Left Side*/}
          <ImageGallery vehicle={vehicle} sectionStyle="mb-16" />
          {/* Show on Mobile up to md */}
          <VehicleTitle vehicle={vehicle} sectionStyle="mb-8 md:hidden" />
          <VehicleDetails
            vehicle={vehicle}
            sectionStyle="md:hidden mb-16 bg-white dark:bg-black-2 shadow-md py-8 px-4 lg:px-6 rounded-md"
          />
          <div className="bg-white dark:bg-black-2 shadow-md py-8 px-4 lg:px-6 rounded-md">
            <SectionHeader vehicle={vehicle} sectionStyle="mb-8" />
            <InspectionCard vehicle={vehicle} />
          </div>
        </div>
          
        </section>
        {/* Vehicle Title, Details & Annnouncements */}
        <section className="col-span-1 md:col-span-5">
          <div className="md:sticky md:top-[137px] space-y-16">
            <VehicleTitle vehicle={vehicle} sectionStyle="mb-8 hidden md:flex" />
            <VehicleDetails
              vehicle={vehicle}
              sectionStyle="hidden md:flex bg-white dark:bg-black-2 shadow-md py-8 px-4 lg:px-6 md:rounded-md"
            />
            <Announcements vehicle={vehicle} />
          </div>
        </section>
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
