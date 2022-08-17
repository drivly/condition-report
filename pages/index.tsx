import axios from "axios";
import { AutoCard, Banner, SectionTitle } from "components";
import { GetStaticProps } from "next";
import { Vehicle } from "typings";
import baseUrl from "utils/baseUrl";

interface Props {
  vehicles: Vehicle[];
}

const Home = ({ vehicles }: Props) => {
  console.log("vehicles", vehicles);
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
        wrapperStyle="justify-start mb-10 h-96 p-4 sm:p-12 rounded-b-3xl"
        bodyStyle="absolute md:text-5xl text-white leading-snug md:leading-snug"
      />
      <main className="w-full mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 min-w-fit w-full mx-auto gap-10 mt-5 pb-10 ">
          {vehicles.map((vehicle) => (
            <AutoCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(`${baseUrl}/api/vehicles`);

  return {
    props: {
      vehicles: response.data,
    },
    revalidate: 60,
  };
};
