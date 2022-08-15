import axios from "axios";
import { AutoCardLarge, Banner } from "components";
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
        wrapperStyle="justify-start mb-6 h-96 p-12 xs:p-4 xs:h-44 rounded-b-3xl"
        bodyStyle="absolute md:text-4xl sm:text-2xl xs:text-xl text-left text-white"
      />
      <main className="w-full">
        <h1 className="font-poppins dark:text-white text-dark-1 text-2xl md:text-3xl font-semibold">
          Top Sellers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 min-w-fit w-full mx-auto gap-10 mt-4 pb-10 mb-12">
          {vehicles.map((vehicle) => (
            <AutoCardLarge key={vehicle.id} vehicle={vehicle} />
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
