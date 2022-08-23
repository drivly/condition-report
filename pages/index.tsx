import { AutoCard, Banner, SectionTitle } from "components";
// import { getVehicles } from "lib/getVehicles";
import vehicles from "lib/vehicles.json";
import { Vehicle } from "typings";

interface Props {
  vehicles: Vehicle[];
}

const Home = ({ vehicles }: Props) => {
  return (
    <div className="flex flex-col justify-center">
      {/* Banner Hero Image */}
      <Banner
        image
        bannerText={
          <>
            Powered by Drivly
            <br /> Automotive Data &amp; Services
          </>
        }
        wrapperStyle="justify-start mb-20 h-96 p-4 sm:p-12 rounded-b-3xl"
        bodyStyle="absolute  text-gray-1 leading-snug md:text-4xl md:leading-snug lg:leading-snug lg:text-5xl"
      />
      <main className="w-full my-12">
        <SectionTitle
          heading="Explore Listings"
          title={
            <>
              Find Your Ride,
              <br />
              <span>Powered by Drivly</span>
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 min-w-fit w-full mx-auto gap-10 mt-8 pb-10 ">
          {vehicles.map((vehicle) => (
            <AutoCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  // const vehicles = await getVehicles()
  // or I just returned the json file
  return {
    props: {
      vehicles,
    },
    revalidate: 60,
  };
};
