import {
  AutoGrade,
  ImageGallery,
  InspectionCard,
  ManexIcon,
  OffsiteNotes,
  SectionHeader,
  SectionTitle,
  TitleInfo,
  VehicleDetails,
} from "components";
import { getVehicleById } from "lib/getVehicleById";
import { getVehicles } from "lib/getVehicles";
import { GetStaticProps } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Vehicle } from "typings";

interface Props {
  vehicle: Vehicle;
}

const VehiclePage = ({ vehicle }: Props) => {
  const {
    vehicleDetails,
    offsiteAnnouncements: announce,
    offsiteRemarks: remarks,
  } = vehicle;

  return (
    <main className="pt-12 max-w-6xl mx-auto relative mb-8 pb-6">
      {vehicle.metaData && <ManexIcon vehicle={vehicle} />}
      <section className="sm:flex sm:space-x-8 justify-between  pb-8 border-b-4 border-gray-6/20 relative mb-10">
        <SectionTitle
          heading="Condition Report"
          title={
            <span className="whitespace-pre-wrap">
              {vehicleDetails.year} {vehicleDetails.make} {vehicleDetails.model}{" "}
              {vehicleDetails.trim}
            </span>
          }
          grade={<AutoGrade vehicle={vehicle} />}
        />

        <TitleInfo vehicle={vehicle} />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        {/* LEFT side */}
        <div>
          <ImageGallery vehicle={vehicle} />
          <VehicleDetails vehicle={vehicle} />
        </div>

        {/* RIGHT side */}
        <div className="mb-8 gap-x-4">
          {announce.length || remarks.length ? (
            <section>
              <h3 className="uppercase text-gray-6 tracking-widest font-medium text-sm">
                Announcements/Remarks
              </h3>
              <h3 className="dark:text-gray-1 text-dark-1 text-3xl md:text-4xl font-bold leading-normal md:leading-normal whitespace-nowrap mb-4">
                {vehicleDetails.model} Notes
              </h3>
              <div className="mb-10 space-y-8">
                {announce?.length > 0 && <OffsiteNotes notes={announce} />}
                {remarks?.length > 0 && <OffsiteNotes remarks={remarks} />}
              </div>
            </section>
          ) : null}
          <SectionHeader vehicle={vehicle} />
          <InspectionCard vehicle={vehicle} />
        </div>
      </section>
    </main>
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
